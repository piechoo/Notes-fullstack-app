# Simple notes-app
A simple Notes list app made using Node.js, Express, React and MySQL (and Sqlite3 for testing)


## Prerequesites
* MySQL
* Node.js
* Sqlite3 ( for testing )

## Setup MySQL database
To setup MySQL databse we need to run following commands from `database` directory ( `root` should be replaced with MySQL server username )
```
mysql -u root -p
CREATE DATABASE notes;
USE notes;
SOURCE notes.sql
```
## Build and run project
### Build
To build project following commands should be run from project directory:
```
npm install body-parser cross-env express mocha mysql2 nodemon sequelize should sqlite3 supertest

cd notes-ui

npm install react react-dom react-router-dom react-scripts web-vitals
```
In order to work properly, `config.js` file in `src/model` should be edited with correct username and password of MySQL user  
***
### Run
To run this project following commands should be run from project directory:
```
npm start
```
And in another terminal
```
cd notes-ui

npm start
```
Now API is working on `localhost:4006` and UI is working on `localhost:3000`
***
### Run tests
To run tests following command should be run from project directory:
```
npm test
```
And in another terminal:

```
mocha
```
## Example curl commands

### Create (Post)
Creating new note with data passed in title and content  
```
curl -d "title=example1&content=example2" http://localhost:4006/notes
```  
API returns json with created object
***
### Read (Get)
Showing all created and not deleted notes  
```
curl http://localhost:4006/notes
```  
API returns all actual notes in json format
***
### Update (Put)
Updating note with given id number with data passed in title and content  
```
curl -X PUT -d "title=updated&content=content" localhost:4006/notes?id=28
```  
Other version - updating only content of note with given id  
```
curl -X PUT -d "content=content" localhost:4006/notes?id=28
```  
API returns json with updated object
***
### Delete (Delete)
Deleting note with given id  
```
curl -X DELETE localhost:4006/notes?id=28
```
API returns [1] if note was deleted succesfully
***
### History (Get)
Showing history of all notes
```
curl http://localhost:4006/history
```
Other version - showing only history of note with given id  
```
curl http://localhost:4006/history?id=28
```
API returns json with chosen note or all notes
***
### Content (Get)
Showing content of note with given id  
```
curl http://localhost:4006/notecontent?id=28
```
API returns json with chosen note content
