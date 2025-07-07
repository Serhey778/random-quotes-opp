# Random Quotes OPP with API

Welcome to the Rundom Quotes app!
This project consists of a client-side Vanilla JavaScript app and a server-side Express Node.js app.

## Running the App in Development Mode

### Run server

1. Navigete to the root directory of the project.
2. Open new terminal window.
3. Change directory to the server subfolder:
   `cd server`.
4. Install server dependencies by running the following command:
   `npm install`.
5. Run server in the development mode with hot reload feature:
   `npm run dev`.
6. Server will be running at the `http://localhost:3000`.

### Run client

1. Open new terminal window in the root of the project.
2. Run client in the development mode with hot reload:
   `npx live-server client`.
3. Client will be running at the `http://127.0.0.1:8080` or `http://localhost:8080`.

## Running the App in Production Mode

### Run server

1. Navigete to the root directory of the project.
2. Open new terminal window.
3. Change directory to the server subfolder:
   `cd server`.
4. Install server dependencies by running the following command:
   `npm install`.
5. Run server in the production mode:
   `npm start`.
6. Configure hosting server where you run application to forword all requests to the `http://localhost:3000`.
7. Take assigned by the hosting provider URL for you backend API server. For example `https://random-quotes-api.com`.

### Run client

1. There is no need to build the client asit already contains HTML, CSS and JS files.
2. In the `client/src/config.js` replace `http://localhost:3000` with URL assignet to the server API in the step 7. in the previous section. For example `https://random-quotes-api.com`.
3. Host all client files from the `client` subfolder on the public web server.
4. Get assigned by the hosting provider URL for you client frontend application. For example `https://random-quotes-frontend.com`.
5. Open`https://random-quotes-frontend.com` in the web browser.
