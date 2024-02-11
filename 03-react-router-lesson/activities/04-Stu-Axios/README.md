# Axios

In this activity, we will create a simple React application with which users can query the OMDb API and display information about the movie that is searched for.

## Instructions

* Replace your React application's `src` folder with [starter/src](starter/src).

* This activity uses Bootstrap, so make sure to add `import 'bootstrap/dist/css/bootstrap.min.css';` and `import * as bootstrap from 'bootstrap';` in `main.jsx`.

* Be sure to install the axios library by running `npm install axios` in your terminal.

* Stop the dev server if it is already running. Start the app in dev mode by running `npm run dev`.

* Open your browser to [localhost:5173](http://localhost:5173) and study the rendered application.

* This application is supposed to allow users to search for the name of a movie via the form on the right of the page and display information from the OMDb API on the left side. Currently the application isn't fully functional.

* Open the `src/OmdbContainer.jsx` and add the following code:

  * Add a `searchMovies` function that should utilize the `API.js` module to query the OMDb API to search for films. Then update this component's `results` state with the result of the Axios request. Don't forget to catch any potential errors.

  * Add a `handleInputChange` function that should be called whenever the user types into the input field. Inside of this function, set `searchData.search` equal to the new value of the input field. You can verify that you've completed this step correctly if you can now type into the input field.

  * Add a `handleFormSubmit` function that should be called when the form is submitted. Inside of this function, utilize the `API` module to search the OMDb API for the value of `searchData.search`. Then update this component's `results` state with the result. You can verify that you completed this step correctly by searching for the name of a movie. If successful, you should see the movie poster and some information about the movie appear in the left card.

### BONUS

* After you get the rest of the application code working, add code so that if no movie results are found, a message is displayed indicating this in place of the `MovieDetail` component. Otherwise, display the `MovieDetail` component. You can verify that you completed this step correctly by searching for an empty string. If successful, you should see your message being displayed instead of any movie information.

### Hints

* Don't forget to call `event.preventDefault()` inside of any event handlers called in response to an HTML form being submitted.

* The only code you need to modify is inside of `OmdbContainer.jsx`.

* If you make it to the bonus, check out [React's documentation on Conditional Rendering](https://react.dev/learn/conditional-rendering). Use any of the techniques described to complete the bonus.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
