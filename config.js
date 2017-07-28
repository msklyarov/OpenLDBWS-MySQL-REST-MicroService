const port = process.env.PORT || 8080;

module.exports = {
  source: {
    soapUrl: 'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/wsdl.aspx?ver=2017-02-02',
    accessToken: 'accessToken'
  },
  db: {
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'nationalrail'
  },
  server: {
    port: port,
    routePrefix: '/api'
  }
};
