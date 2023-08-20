# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## First working progress

**Running the App and Interacting with the API**

Welcome to [Contact Management]! To get started, follow these steps to run the app and explore its API capabilities.

**Running the App:**

1. **Prerequisites:** Ensure you have Node.js (v18.16.0 [v18.16.0]) and npm installed on your system.

2. **Installation:** Clone the app's repository from [https://github.com/subrota22/contact-management] and navigate to the app's directory using the command line.

3. **Dependencies:** Install the required dependencies using `npm install`.

4. **Configuration:** Rename the `REACT_APP_TOKEN` file to `.env` and configure the environment variables according to your needs.Recive it in your component with `process.env.REACT_APP_TOKEN`

5. **Start the App:** Launch the app with `npm start`. Open your browser and go to `http://localhost:3000` (or as specified in your `.env`).

**Interacting with the API:**

[covid-19 affected country] offers various API endpoints to provide functionality. Here's an example endpoint:

- **Endpoint:** `https://disease.sh/v3/covid-19/countries`
  - **Method:** GET
  - **Description:** [This api will fetch the all data of countries]
  - **Example Request:**
    ```
    GET https://disease.sh/v3/covid-19/countries

    ```

    - **Endpoint-2:** `https://disease.sh/v3/covid-19/all`
  - **Method:** GET
  - **Description:** [This api will fetch the data of countries for covid-19 update]
  - **Example Request:**
    ```
    GET https://disease.sh/v3/covid-19/countries


    - **Endpoint-:** `https://disease.sh/v3/covid-19/all`
  - **Method:** GET
  - **Description:** [This api will fetch the data of countries for covid-19 update]
  - **Example Request:**
    ```
    GET https://disease.sh/v3/covid-19/countries

    - **Endpoint-2:** `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
  - **Method:** GET
  - **Description:** [This api will fetch for covid-19 date of cases]
  - **Example Request:**
    ```
    GET https://disease.sh/v3/covid-19/historical/all?lastdays=all


    - **Endpoint-2:** `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
  - **Method:** GET
  - **Description:** [This api will fetch the data of countries for covid-19 update]
  - **Example Request:**
    ```
    GET https://disease.sh/v3/covid-19/historical/all?lastdays=all

**Tools and Packages:**

      # Redux
      # TranStack Query
      # TypeScript
      # Sweetalert2
      # React router dom
      # Tailwind CSS
      # Daisy UI
      # React JS
      # React Spinner
      # React Redux
      # Redux Toolkit
      # React Icons
      # React Helmet
      # Rechart

**API Keys:**

Some features of [Your App's Name] might require API keys. Obtain the keys from respective services, and insert them in the `.env` file as `API_KEY=[your-api-key]`.

**Troubleshooting:** If you encounter issues, consult the provided troubleshooting guide or contact support at [subrota45278@gmail.com](mailto:subrota45278@gmail.com).

In just a few simple steps, you'll have [Contact management] up and running, with the API ready for exploration and integration into your projects.

**Redux Working Overflow:** The provider has in the index.js file with wrap App.js Provider taken
one store that is `configeStore` from  Redux Toolkit.ConfigStore has reudcer this reducer take an object that is reducers this is the `combineReducer` this combineReducer taken the all reducer that I have in the reducer directory wtih file name covidInfo and index.js of the root for combineReducer.All action has in the action directory and actionType has in the actionType directory.Has `useDispatch` to dispatch data and `useSelector` from `react-redux`.

  >> Happy coding!

