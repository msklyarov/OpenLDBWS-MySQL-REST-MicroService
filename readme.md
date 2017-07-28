Steps to run the server:

- npm i
- npm start
- Install MySQL server and create table with data and structure from sql/table.sql file

config.js defines accessToken, soap URL, route prefix, the server port, and MySQL configuration.

Default routes are:

http://localhost:8080/api/getArrivalBoard

```
Request: POST
Content-Type: application/json
Raw payload: {
    "numRows": 10,
    "crs":"LDS",
    "timeWindowInMins": 120
}
```

http://localhost:8080/api/getServiceDetails
```
Request: POST
Content-Type: application/json
Raw payload: {
    "numRows": 3,
    "crs":"LDS",
    "timeWindowInMins": 120,
    "serviceID": "lZ2ciXjR/Lq0Z8xI4O0E3A=="

}
```

http://localhost:8080/api/getArrivalBoardWithDB
```
Request: POST
Content-Type: application/json
Raw payload: {
    "firstName": "Darren",
    "lastName": "Marsden",
    "numRows": 10,
    "timeWindowInMins": 120
}

```
```
Request: POST
Content-Type: application/json
Raw payload: {
    "firstName": "John",
    "lastName": "Smith",
    "numRows": 10,
    "timeWindowInMins": 120
}
```
```
Request: POST
Content-Type: application/json
Raw payload: {
    "firstName": "Jane",
    "lastName": "Doe",
    "numRows": 10,
    "timeWindowInMins": 120
}
```

You can use: Advanced REST client to test requests:

https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo