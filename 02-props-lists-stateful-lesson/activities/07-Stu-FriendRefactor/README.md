# Friends List Refactor

In this activity, we will use our new React skills to further refactor the friends list application from earlier.

## Instructions

* Replace your React App's `src` folder with [starter/src](starter/src). Stop the dev server if it is already running. Start the app in dev mode by running `npm run dev`.

* Open [localhost:5137](http://localhost:5137) in your browser and take a moment to study the rendered app.

* Refactor the `App` component:

  * Call the `useState` hook to set the component's initial state to the `friendData` JSON array.
  
  * Inside of the `return` block, map over the current state to render each `FriendCard` component passing in the appropriate props.

* Add functionality to the application so that when the red X icon on a `FriendCard` is clicked, that `FriendCard` is removed from the page.
  
  * To accomplish this, you should define a method inside of `App` that accepts an `id` parameter, and then utilize a filter to create a new array of friends without the passed `id`.
  
  * Then set the component's state to this new filtered array.
  
  * You'll want to pass this method into each `FriendCard` component and attach an `onClick` listener to the "remove" span.

## Hints

* Test your application after each step!

* Refer back to the previous in-class activities if you get stuck anywhere.

* [useState documentation](https://react.dev/reference/react/useState)

* If you get stuck working with the event handler, spend a few minutes reading [React's documentation](https://react.dev/learn/responding-to-events) on handling events.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
