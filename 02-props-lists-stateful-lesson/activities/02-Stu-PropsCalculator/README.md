# Props Calculator

In this activity, we will write a component that can perform some arithmetic using passed props and render an element containing the result.

## Instructions

* Replace your React application's `src` folder with [starter/src](starter/src). Stop the dev server if it is already running. Start the app in dev mode by running `npm run dev`.

* This activity uses Bootstrap, so make sure to add `import 'bootstrap/dist/css/bootstrap.min.css';` and `import * as bootstrap from 'bootstrap';` in `main.jsx`.

* Open your web browser to [localhost:5137](http://localhost:5137). Take a moment to observe the rendered app.

* Open `src/components/Calculator.jsx` in your editor and take a moment to study the application's code.

* Write a component named "Maths" and render one Maths component in the place of each "?" mark.

* The Maths component should perform some arithmetic using three props:

  * `num1` - a number

  * `operator` -  a string representing an arithmetic operator (e.g., "+", "-", "*", "/")

  * `num2` - a number

* The Maths component should render the result of problem in a `span` tag (e.g., 19 + 341 = 360).

## Hint

* Check out [React's documentation for props](https://react.dev/learn/passing-props-to-a-component).

## BONUS

* Using the [style prop](https://react.dev/reference/react-dom/components/common#applying-css-styles), set the font-size of the `span` rendered by the `Maths` component to be the result of the arithmetic problem in pixels (e.g., the font-size of the `span` rendering the result of "19 + 341 = 360" should be 360 pixels).

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
