# Career Website
This repository contains the front end component for the Career Website. Career Website is a job vacancies web application specifically designed for internship job opportunities. This project is divided in two, the first one is the front end which is located in this repository and the web service can be found in this repository: https://github.com/jessicawiradinata/career-website-service. This project is using TS Lint for the maintain the quality of the code. 

## Author
This project is created by Jessica (jessicawiradinata), Kevin (KevinKostnerr), and Stefanus Yoshua (syoshua) which are the students of UTS.

## Getting Started
#### 1. Clone this repository and the web service repository using the command in terminal:
```
git clone https://github.com/jessicawiradinata/career-website.git
```
#### 2. Change the current directory to the file repository using command:
```
cd career-website
```
#### 3. Install the required node modules using command on both terminal window:
```
npm install
```
#### 4. Run the project on the server using command on both terminal window:
```
npm start
```
## Coding Style
- Braces are required for all control structures
- Variables are using camelCase
- Require statements, grouped together immediately following the module declaration
- Use two spaces for indenting
- One statement per line
- Have a comment on every function that describes its purpose
- Column limit of 150 characters
- Don't abbreviate local variable
- Ordinary string literals are delimited with single quotes ('), rather than double quotes (").
- An empty block or block-like construct may be closed immediately after it is opened, with no characters, space, or line break in between (i.e. {}), unless it is a part of a multi-block statement
- Prefer to put all function arguments on the same line as the function name. If doing so would exceed the 150-column limit, the arguments must be line-wrapped in a readable way.
- Use Javadoc for method and class comment
- Use JavaScript ES6 (EcmaScript 6)


## Source file
The source file of this project can be seen on the src folder that contains the component for the application.
### actions
Specify if something has happened, Request and Response, using the ActionType constant to define the action
### assets
Contains all the images that this application use.
### components
Collections of the reusable components of the application:
* #### Header
* #### PageNotFound
* #### PostCard
* #### PostForm
### constants
* #### ActionType.js
Contains all the constant for all the action type the user do
* #### Config.js
Contains the API endpoint constant to access the web service, the current API endpoint is pointed into the aws server, you have to change that into your local address if you want to use it with the web service running on your own machine.
### containers
All the User Interface components are stored here. This application has eight pages so there are 8 subfolder that contains the component needed which are Action, Container, Layout, selector, and styles for each of the page . The eight pages are:
* #### createPost
* #### editPost
* #### home
* #### login
* #### myAccount
* #### myPosts
* #### posts
* #### signUp
### domain
* #### Model
Model for the User and Post with its attributes and type
* #### Service
Use axios to connect to the web service. One file is for one web service
### reducer
Takes a set of states and actions and returns the next state based on the action
### routes
Contains routing to the right file for each path URL requested
### store
Provides reduux store for the application
### index.tsx
The entry point of the application.

