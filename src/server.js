const soap = require('soap');
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const { db } = require('./dbConnection.js');
const config = require('../config');

const soapHeader = `<AccessToken><TokenValue>${config.source.accessToken}</TokenValue></AccessToken>`;

app.use(bodyParser.json());

// GetArrivalBoard
router.post('/getArrivalBoard', (req, res) => {
  soap.createClient(config.source.soapUrl, (err, client) => {
    client.addSoapHeader(soapHeader);
    client.GetArrivalBoard(req.body, (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        res.json(result);
      }
    });
  });
});

// GetServiceDetails
router.post('/getServiceDetails', (req, res) => {
  soap.createClient(config.source.soapUrl, (err, client) => {
    client.addSoapHeader(soapHeader);
    client.GetServiceDetails(req.body, (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        res.json(result);
      }
    });
  });
});

// GetArrivalBoard
router.post('/getArrivalBoardWithDB', (req, res) => {
  if (!req.body.firstName || !req.body.lastName) {
    console.log('firstName & lastName fields are mandatory!');
    res.sendStatus(400);
  } else {
    db('users').select()
      .where('FirstName', req.body.firstName)
      .andWhere('LastName', req.body.lastName)
      .then(results => {
        if (results.length) {
          soap.createClient(config.source.soapUrl, (err, client) => {
            client.addSoapHeader(soapHeader);

            const request = Object.assign({}, req.body);
            delete request.firstName;
            delete request.lastName;
            request['crs'] = results[0].CRS;

            client.GetArrivalBoard(request, (err, result) => {
              if (err) {
                console.log(err);
                res.sendStatus(400);
              } else {
                res.json(result);
              }
            });
          });
        } else {
          console.log('user not found');
          res.sendStatus(400);
        }
      });
  }
});

app.use(config.server.routePrefix, router);

app.listen(config.server.port, () => {
  console.log(`listening at ${config.server.port}`);
});
