### Node JS WEB SERVICE for the POC Analytics

This WEB SERVICE provides functionalities for the proof of concept on analytics. 
The service is available in the url: 

http://mongoa0.southcentralus.cloudapp.azure.com:8080/

to run locally follow the instructions

##### Environment Setup

> **Software**
> - Node JS version 6.11.0
> - Mongo DB version 2.6.10

> **Environment Mongo DB**

> ##### config mongo
> - in the shell run
> - mongo
> - use analytics
> - db.addUser("analytics","6pnpD7PG")
> - exit

> ##### start server
> - in the file app.js go to line 25/26 
> - change user/pass and use credential create in mongo config
> - save the file
> - in shell go to project folder and run
> - npm start


##### API 

http://localhost:8080/api/

##### API usage
URL: http://localhost:8080/api/usage
##### GET 
##### BODY 

##### RESPONSE 200
```json
{
    "data": [
        {
            "_id": "598afe4b69f0ec306bedcf66",
            "code": "1.4.6",
            "log": "2017-08-09T12:21:31.052Z",
            "url": "/newsfeed/Chassis/monitoring",
            "type": "test",
            "date": "2017-08-08T17:43:04.111Z",
            "macaddress": "42",
            "__v": 0
        },
        {
            "_id": "598afe6069f0ec306bedcf67",
            "code": "1.10",
            "log": "2017-08-09T12:21:52.007Z",
            "url": "/newsfeed/audits",
            "type": "test",
            "date": "2017-08-08T17:43:07.679Z",
            "macaddress": "42",
            "__v": 0
        }
    ]
}
```
##### POST 
##### BODY
```json
{
  "url": "/pause/",
  "type": "pause",
  "date": "2017-08-09T13:13:14.300Z",
  "macaddress": "43"
 }
 ```
##### RESPONSE 200
```json
{
  "__v": 0,
  "code": "0",
  "url": "/pause/",
  "type": "pause",
  "date": "2017-08-09T13:13:14.300Z",
  "macaddress": "43",
  "_id": "5a2fe20e185c2f38bd09f1c3"
 }
 ```
 
##### API device
URL: http://localhost:8080/api/device
##### GET 
##### BODY 

##### RESPONSE 200
```json
{
    "data": [
        {
            "_id": "595ceb4f8c47150e21d5accb",
            "logTime": "2017-07-05T13:36:15.295Z",
            "time": "2017-07-05T13:36:15.295Z",
            "lat": 42.25,
            "lng": 45.63,
            "so": "IOS",
            "version": "8",
            "model": "xpto",
            "macaddress": "6PNPD7PGHZN8FB",
            "connections": 3,
            "__v": 0
        },
        {
            "_id": "5a0b137ac163c42bb64cc44a",
            "logTime": "2017-11-14T16:02:02.982Z",
            "time": "2017-08-25T17:09:27.303Z",
            "lat": -22.8123217,
            "lng": -47.0613526,
            "so": "Android",
            "version": "6.0",
            "model": "XT1097",
            "macaddress": "86a2824463f6fb9a",
            "connections": 2,
            "__v": 0
        }
    ]
}
```
##### POST 
##### BODY
```json
 {

    "time": 1498741309049,
    "lat": 25.37,
    "lng": 85.45,
    "so": "android",
    "version": "10",
    "macaddress": "DD31241FF",
    "connections": 4,
    "model": "SM-97051L"
  }
 ```
##### RESPONSE 200
```json
{
    "__v": 0,
    "logTime": "2017-12-12T17:59:29.622Z",
    "time": "2017-06-29T13:01:49.049Z",
    "lat": 25.37,
    "lng": 85.45,
    "so": "android",
    "version": "10",
    "macaddress": "DD31241FF",
    "connections": 4,
    "model": "SM-97051L",
    "_id": "5a301901185c2f38bd09f1c4"
}
 ```
