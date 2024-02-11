# HelloReact

In this activity, we will dissect a simple React application.

## Instructions

* If you haven't already, generate a starter React app using Vite. You can do this by running `npm create vite@latest 00-react-practice -- --template react`. We will run all of the activity code today inside of this boilerplate, as to avoid constantly reinstalling the same node modules.

* Once you have a `00-react-practice` React app generated, cd into your application's directory and run `npm install` to install the base dependencies.

* Once everything has been installed, delete the `src` folder inside of your starter app and replace it with the [src](starter/src) provided with this activity.

* Start the app by running `npm run dev` in your terminal and then take a moment to study the HTML code being rendered in the browser at [http://localhost:5173](http://localhost:5173).

### HelloReact.jsx

* Then go into the `src` folder and, with your partner, try to answer the following questions:

  * What's happening inside of `src/components/HelloReact.jsx`? How does it relate to the content being rendered to the browser?

### App.jsx

* Open the `src/App.jsx` file. What's going on in this file? Try to answer the following questions:

  * What does the `App` function return?

  * Why do we import the React library? We aren't using the React keyword anywhere. Is it possible to remove this and still have our code work?

### main.jsx

* Open the `src/main.jsx` file and go over the code. Notice that we're importing `ReactDOM` from the `react-dom/client` library. Try to answer the following questions:

  * Do you remember what the purpose of `ReactDOM.createRoot()` is? What does it return?

  * What is the purpose of `root.render()`?

  * Is this where our components are rendered to the DOM?

  * Instead of splitting our files up into `App`, `components/HelloReact`, and `main`, is it possible to just write our entire Hello World app in the `main.jsx` file?

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
