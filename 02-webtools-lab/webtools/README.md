# WebTools: Track all of the web technologies you're learning.

## What's Included

1. An API (already built), ready to go with 5 Restful CRUD routes to index, show, create, update and destroy web tools. It's in the `./webtools-api` directory.
2. A blank `create-react-app` React application (NOT yet built, that's your job!). It's in the `./webtools-client` directory.

## How to Install and Run

1. To set up and run the API, from this directory:

   ```bash
   # set up the API:
   cd webtools-api
   npm install

   # seed the database:
   npm run seed

   # make sure mongod is running in another tab
   # start the app (the API app will run locally on port 3001
   nodemon
   ```

2. Then in a new terminal tab, make sure to go back to the main directory (the one that contains both the API and Client app folders). We'll set up and run the client app now:

   ```bash
   cd ..
   ls # webtools-api   webtools-client

   # set up the included create-react-app application
   cd webtools-client
   npm install

   # run the client app (it will run on port 3000 as usual)
   npm start
   ```
### After following the installation steps above, your task is to build out a working user interface in the included blank react app.

Time to code! Build out a front-end React application to manage a list of popular Web Developer technologies (Frameworks, Libraries, etc)

- Display the collection of popular web technologies as a list. (The API route to retrieve the list of tools will only give you basic information about a given tool.)
- Clicking on one of the items should show details about that particular web technology. (The API's 'show' route will return full details about the web technology, so you can use that to display all the details when the user clicks on a particular tool's name.)
- There should be a way to create, edit and delete tools in the list, and you have full creative freedom on how to achieve this functionality.
- Don't worry about CSS too much until the main functionality is done.

#### Tips:

- **Axios AJAX Requests:** You'll need to use the `axios` package to make requests to the included API app to send CRUD requests.
- **API documentation**: to see detailed documentation on how to use the API routes that are included, make sure the API app is running, then open Postman and navigate to `localhost:3001/api`
- **Server delay:** By default, all API routes under `/api/tools` simulate a "slow" server query, so that you can test out a visual loading indicator on the front-end. To remove this 'throttling', look in `/webtools-api/index.js` and set `SERVER_DELAY` to `0`.
- **Stateful or Stateless?** Remember you have the choice between using stateful or stateless components. If a component doesn't need to hold any state, and it's *just* meant to render HTML with props that you feed it, use a stateless functional component! Otherwise, use a class.
