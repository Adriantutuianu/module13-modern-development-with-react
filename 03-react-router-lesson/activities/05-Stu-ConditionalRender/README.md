# Conditional Render

In this activity, we will render one of four different components based on our component's state.

## Instructions

* Replace your application's `src` folder with [starter/src](starter/src). Stop the dev server if it is already running. Start the app in dev mode by running `npm run dev`.

* This activity uses Bootstrap, so make sure to add `import 'bootstrap/dist/css/bootstrap.min.css';` and `import * as bootstrap from 'bootstrap';` in `main.jsx`.

* Navigate to [localhost:5173](http://localhost:5173) in your web browser and take a moment to study the rendered application.

  * At the top of the page, there's a Bootstrap NavTabs component. Whenever a nav element is clicked, the nav element goes into an "active" state. Whenever a nav item is clicked, it sets `currentPage` inside of `PortfolioContainer` to the selected navigation item.

* Now add code to `PortfolioContainer` so that, depending on the currently selected page, a different component is rendered underneath the `NavTabs` component. Example:

  * Render the `About` component when `currentPage === "About"`.
  
  * Render the `Blog` component when `currentPage === "Blog"`.

  * Render the `Contact` component when `currentPage === "Contact"`.

  * Render the `Home` component when `currentPage === "Home"`.

### BONUS

* Inside of `src/components/NavTabs.jsx`, add code so that the `a` tag for the `currentPage` has the "active" class. This component receives the `currentPage` via props.

### Hints

* Refer to [React's documentation on Conditional Rendering](https://react.dev/learn/conditional-rendering) if you get stuck.

* Consider defining a function that returns a different component based on the value of `currentPage`.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
