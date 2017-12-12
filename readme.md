### Node JS WEB SERVICE for the POC Analytics

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

