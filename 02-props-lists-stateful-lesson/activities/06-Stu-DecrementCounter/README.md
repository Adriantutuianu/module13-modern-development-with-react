# Decrement Counter

In this activity, we will add a "Decrement" button and click handler to the click counter application.

## Instructions

* Copy the [src](starter/src) folder into your Vite boilerplate. Stop the dev server if it is already running. Start the app in dev mode by running `npm run dev`.

* This activity uses Bootstrap, so make sure to add `import 'bootstrap/dist/css/bootstrap.min.css';` and `import * as bootstrap from 'bootstrap';` in `main.jsx`.

* Open [localhost:5173](http://localhost:5173) in your web browser. This application's starter code is identical to the last example.

* Add code to the `Counter` component to add a `Decrement` button that _decreases_ the value of `count` by one each time it is clicked.

### Hint

* Use the `Increment` button and event handler as a reference for creating the new button.

### BONUS

* Inside of `Counter.jsx`, separate the `card-body` element and its children into a new component named `cardBody`. Render `cardBody` inside of the `Counter` component and pass the `count` state variable and click handlers to the new component as props. The completed bonus should still increment or decrement the counter when the buttons are clicked.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
