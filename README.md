# README #

babylone
======================

Babylone application written using Angular, node.

### Dependencies

* AngularJS 1.5.3
* NodeJs 5.10.0 +
* NPM
* Bootstrap 3.3.6
* Gulp (to build the project) 3.9.0

## Installing the Application

## prerequisite.
* Install NodeJs

* First install bower and gulp globally if you don't have already:
 ```
  $ npm install -g gulp
  $ npm install -g bower 
 ```

* Clone git repo and cd to server folder: 
 ``` 
  $ git clone https://github.com/krishnask6/babylone.git
 ```
  
* Install required node packages: 
 
 *Client side install

 *Install node pacakages.
  ```
  $npm install
  ```
* And finally, install bower dependencies: 
 ``` 
  $ bower install 
 ``` 
 
## Launching the App

* Start the gulp: 
 ```
  $ gulp serve - To run the application
  $ gulp test - To run the unit test cases.
  $ gulp protractor - To run the e2e test case.
  ```
* It will open the app in your default browser. 

### Technical Details
 ```
  Currently following use case is implemented:
  1. Home page - Display a home page with contents and book consultation button
  2. Book consultation page -  Displays a page with required details to be filled by the patient and submit consultation page. Completed with unit test and e2e test cases.
 ```


