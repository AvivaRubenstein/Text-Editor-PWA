# 19 Text Editor Progressive Web App

## Description

This project is a Text Editing Progressive Web Application.  It allows users to write out notes for themselves, which can be accessed and edited both on and offline, making it very useful for situations where one might want to continue to have access to their notes despite having intermittent internet connection. This application can also be installed on a user's device, to create the feeling of working through a native application.  Through building this project, I learned about using Webpack to bundle my project's files for distribution, and to create a Service Worker to allow the application to be usable without internet connection, through caching webpage components and assets for later use.  I also learned how to use the idb package to interact with the browser's IndexedDB to create a database, allowing users to create and edit content which persists through closing the page or losing connection.


## Installation

This application is available for use at https://nameless-wildwood-53462.herokuapp.com/ , but it can also be installed by cloning this repository and running "npm install" followed by "npm run start" in node.  The application would then be available through http://localhost:3000/

## Usage

You can use the Text Editor application by visiting https://nameless-wildwood-53462.herokuapp.com/ on your browser.  You can also (optionally) click the "install" button on the page to download the web application to your device.  You can add and update your own notes to the page.  The application is able to continue to function even with intermittent internet connection, so you will not lose access to your notes.

`!(Screenshot)Text-Editor-PWA/Assets/Screenshot.png `

## Credits

This application was build using starter code from Columbia's Full-Stack Web Development Bootcamp.  It utilizes modules from Webpack to build this project as a Progressive Web Application, as well as Babel to allow for the use of modern JavaScript in the application, and the idb package to utilize the webpage's IndexedDB database.  

## License

See LICENSE.txt file in repository

---