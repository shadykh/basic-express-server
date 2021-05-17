# Lab: Class 02

### From a business requirements standpoint, we will be building a basic Express server using best practices, including server modularization, use of middleware, and tests

- Person Route
  - Method: GET
  - Path: /person
  - Expects a query string from the user with a “name” property
    When present, output JSON to the client with this shape: { name: "name provided" }
    Without a name in the query string, force a “500” error.

- The lab tree
  - ![Tree](https://raw.githubusercontent.com/shadykh/basic-express-server/main/src/assets/tree.PNG)

- Implementation Notes
  - index.js at the root of the repository, which will act as the “entry point” to my server.
    - should require server.js
    - should require `dotenv`, reading `PORT` from your .env file
    - it should call the `.start()` method from the server with the `PORT` set in your environment
    - src/server.js which will serve as your server ‘module’ … will contain all of the module connections for the server
    - Must export an object with a start() method (it should not start on it’s own) and a reference to the express app
    - Create a middleware folder and add 2 middleware modules to it:
    - logger.js
      - Performs a console.log with the request method and path
      - Import this into your server and set it up to run at the application level for all routes
    - validator.js
      - Checks the query string for a name property
      - Sends the request through when valid, forces an error when not
    - Create a error-handlers folder and add 2 modules to it:
    - 404.js
      - Sends a 404/Not-Found message as the response
      - Import this into your server and set it up to be “used” after your other routes
    - 500.js
      - Sends a 500/Server Error message as the response
      - Import this into your server and set it up to be “used” as the last route
    - Create the /person route within your server.js
    - This route should use the validator middleware to check the user’s input
    - If valid, send a JSON object through the response with the name value in it
- Testing Requirements
    - 404 on a bad route
    - 500 if no name in the query string
    - 200 if the name is in the query string

- ## More about the Lab

  - Github
    - For the repo ***basic-express-server*** clicks => [here](https://github.com/shadykh/basic-express-server).
    - Pull Requests:
        - [https://github.com/shadykh/basic-express-server/pull/1](https://github.com/shadykh/basic-express-server/pull/1)
    - Actions:
        - [https://github.com/shadykh/basic-express-server/actions/runs/850088019](https://github.com/shadykh/basic-express-server/actions/runs/850088019)
        - [https://github.com/shadykh/basic-express-server/actions/runs/850088157](https://github.com/shadykh/basic-express-server/actions/runs/850088157)
    - Local Tests:
        - ![Local Test Image](https://raw.githubusercontent.com/shadykh/basic-express-server/main/src/assets/tests.gif)
    - GitHub Tests:
        - ![github tests](https://raw.githubusercontent.com/shadykh/basic-express-server/main/src/assets/githubtests.gif)
  - Heroku
    - For the link of the ***deployment main branch***  clicks => [here](https://shady-server-deploy-dev.herokuapp.com/).
  - UML:
    - ![Local Test Image](https://raw.githubusercontent.com/shadykh/basic-express-server/main/src/assets/uml.PNG)
  - Tests:
    - 
  - I did this lab with help of
    - Node.js.
    - express.
    - dotenv.
    - supertest.
    - jest.
    - Github.
    - Heroku.
    - VsCode.
    - Ubuntu.

## Notes

- MVC:
  - MVC stands for Model, View, and Controller. MVC separates an application into three components - Model, View, and Controller.
    - > for further information clicks => [here](https://www.tutorialsteacher.com/mvc/mvc-architecture#:~:text=MVC%20stands%20for%20Model%2C%20View,data%20retrieved%20from%20the%20database.)
- HTTP Request Types:
  - All requests are sent using an "HTTP method". The method designates the type of request being made to the web server. The most common types of request methods are GET and POST but there are many others, including HEAD, PUT, DELETE, CONNECT, and OPTIONS. GET and POST are widely supported while support for other methods is sometimes limited but expanding.
    - > for further information clicks => [here](https://guides.codepath.com/websecurity/HTTP-Request-Types#:~:text=The%20method%20designates%20the%20type,is%20sometimes%20limited%20but%20expanding.)
- REST and SOAP:
  - SOAP vs. REST, two of the most common API paradigms. Although the two are often compared as apples to apples, they’re inherently different technologies and aren’t easily compared on a granular level. Why? Because SOAP is a protocol, and REST is an architectural style. A REST API can actually utilize the SOAP protocol, just like it can use HTTP. So, right off the bat, they’re going to be packaged differently, function differently, and be used in different scenarios.
    - > for further information clicks => [here](https://www.upwork.com/resources/soap-vs-rest-a-look-at-two-different-api-styles?utm_source=google&utm_campaign=SEM_GGL_INTL_NonBrand_Marketplace_DSA&utm_medium=cpc&utm_content=113089129402&utm_term=&campaignid=11384804789&gclid=CjwKCAjwqIiFBhAHEiwANg9szrWMLd7P9QQ4VRETxz3jPo7vQAxwQhG7WKSyuFryUk_AzoCjQoN4vxoCVagQAvD_BwE)
- MERN Stack:
  - MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
    - > for further information clicks => [here](https://www.mongodb.com/mern-stack)
- MERN Stack:
  - Middleware is software that lies between an operating system and the applications running on it. Essentially functioning as hidden translation layer, middleware enables communication and data management for distributed applications.
    - > for further information clicks => [here](https://azure.microsoft.com/en-us/overview/what-is-middleware/#:~:text=Middleware%20is%20software%20that%20lies,data%20management%20for%20distributed%20applications.)

<br>

---
<br>

- ### Shady Khaled github ✅: 
    - [Shady Khaled](https://github.com/shadykh)

- ### Shady Khaled reading notes 📚: 
    - [Shady Khaled reading notes](https://shadykh.github.io/reading-notes/)

- ### Shady Khaled portfolio 💬: 
    - [Shady Khaled portfolio](https://portfolio-shady.herokuapp.com/)