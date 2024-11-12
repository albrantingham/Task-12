# My store-app

This app showcases the skills I have acquired during my web development course with Hyperion Dev. The first part of this course focused on JavaScript programming, and the second on front end development. This app brings together all my learning in a responsive, user-friendly e-commerce platform that demonstrates my ability to apply what I’ve learned in real-world projects.


## Table of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Key Features](#key-features)
  - [Navigation Bar](#navigation-bar)
  - [React Router](#routing)
  - [Get in Touch (Contact Form)](#get-in-touch)
  - [Formik Validation](#formik-validation)
  - [Product Browsing](#product-browsing)
  - [Add to Cart](#add-to-cart)
  - [Total Price Calculation](#total-price)
  - [Shipping Help](#shipping-help)
  - [Account Creation & Login](#account-creation--login)
  - [Footer](#footer)
  - [Responsive Design](#responsive-design)
  - [JavaScript Functionality](#javascript-functionality)
  - [React Components](#react-components)
  - [Bootstrap Integration](#bootstrap-integration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## About the Project

My Store-App is an surf-based **e-commerce web application** that allows users to browse a catalog of products in the 'Shop' section, and add them to the shopping 'Cart' that displays the total price of their seleced items. It also features a 'Home' page that introduces the site, a 'Login' page, and a 'Registration' page that allows users to create an account. The app was built with a focus on **interactivity**, **usability** and **aesthetics**, using **React** for the front-end and **JavaScript** for managing the app's state and behavior.

### Key Features

- **Navigation Bar**: The site's navigation bar contains links to the various pages within it. It is designed to be responsive, adapting to different screen sizes. On larger screens, the links are displayed in a horizontal format. On smaller screens, they are condensed into a hamburger button that reveals a dropdown menu when clicked. Users can easily click outside the dropdown menu to close it, ensuring a smooth and user-friendly experience.
-**Routing**; **React Router** is used to handle navigation within the app. It allows users to seamlessly move between pages without reloading the entire page, ensuring faster and smoother transitions.
- **Get in Touch**: The home page features a modal that allows users to send a message to the 'Caswell Surf' team.
- **Product Browsing**: Users can browse a variety of surf-related products in the 'Shop' page, viewing details such as price, description, and image.
- **Add to Cart**: Users can add items to their cart, view the cart, and change quantities within it. I used Redux to manage the global state of the cart to keep the cart data consistent and ensure items remain in it even when navigating between pages.
- **Total Price**: The total price of the products in the cart is displayed at the bottom of the page and dynamically updated as users add or remove items, or select their shipping method from the dropdown menu.
- **Shipping Help**: A modal next to the shipping method dropdown explains each option clearly to the user.
- **Create an Account**: Users can create an account on the registration page, which requires first and last names, a username, email, and password.
- **Login**: Users can log in with a username and password. This is validated with Formik, and the username is then stored in React state and displayed in the header to personalize the user experience. The login page is no longer available once the user has 'logged in' — their username is displayed in place of the login link in the navigation bar.
- **Footer**: The footer displays contact details and a copyright notice.
- **Formik Validation**: Formik validation is used across various forms to ensure all fields are correctly filled, including the 'Get in Touch' modal, the registration page, and the login page.
- **Responsive Design**: The app is designed to be mobile-friendly and each page adapts to different screen sizes.
- **JavaScript Functionality**: Complex JavaScript logic handles adding/removing products from the cart, updating quantities, and calculating total prices.
- **React Components**: I used React components to break down the UI into reusable sections, which helps with the maintainability of the code. 
- **Bootstrap**: The app uses **Bootstrap** for its responsive design and UI elements. Notable uses include:
  - **Bootstrap cards** for displaying products in the 'Shop' page, showing details such as price, description, and images.
  - **Responsive layout** to ensure the app looks good on all screen sizes, adjusting layout elements like the navigation bar and product grid.
  - **Bootstrap buttons** for various actions such as submitting forms and adding products to the cart.


## References 

*  https://mdbootstrap.com/docs/standard/extended/shopping-carts/
* https://stackoverflow.com/questions/71440882/how-to-make-header-component-know-if-user-is-logged-in-in-react
* https://dmitripavlutin.com/react-context-and-usecontext/
* https://stackoverflow.com/questions/69266231/how-to-add-copyright-symbol-in-react-component 
* https://www.google.com/search?q=Redux+Docs+-+Basic+Tutorial&oq=Redux+Docs+-+Basic+Tutorial&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMgYIAhBFGEDSAQcxNzZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
* https://react-redux.js.org/
* https://react-redux.js.org/api/hooks
* https://www.youtube.com/watch?v=poQXNp9ItL4
* https://www.google.com/search?q=React+Docs+-+Using+the+State+Hook&oq=React+Docs+-+Using+the+State+Hook&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMgYIAhBFGEDSAQcxNTZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
* https://legacy.reactjs.org/docs/handling-events.html
* https://react-bootstrap.netlify.app/
* https://react-bootstrap.netlify.app/docs/components/modal/
* https://reactrouter.com/en/main
* https://react-icons.github.io/react-icons/ 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
* https://formvalidation.io/guide/api/reset-form/ 
* https://www.dhiwise.com/post/the-ultimate-guide-to-react-click-outside-modal-to-close
* https://formik.org/docs/tutorial
* https://formik.org/docs/examples/basic
* https://codesandbox.io/p/sandbox/formik-form-validation-uog4g?file=%2Fsrc%2Findex.js 
* https://mailtrap.io/blog/validate-emails-in-react/
* https://www.youtube.com/watch?reload=9&v=G8BRVETdLVY
* https://getbootstrap.com/docs/5.0/forms/validation/
* https://formik.org/docs/guides/validation
* https://www.dhiwise.com/post/react-conditional-styles-made-easy-best-practices
* https://reactrouter.com/en/main/hooks/use-navigate
* https://javascript.plainenglish.io/use-react-to-make-your-images-responsive-a5e6791f19f0
* https://cloudinary.com/guides/responsive-images/how-to-handle-responsive-images-in-react
* https://getbootstrap.com/docs/4.0/layout/grid/
* https://www.youtube.com/watch?app=desktop&v=Wqu-d_b3K-0 
* https://www.w3schools.com/react/react_router.asp
* https://stackoverflow.com/questions/61114261/why-would-i-get-ora-01422-error-while-inserting-a-single-row-using-jdbc/61128945#61128945
* https://www.youtube.com/watch?v=y3Z1SRV54hI 
* https://www.youtube.com/watch?v=XLJN4JfniH4
* https://stackoverflow.com/questions/42702455/using-pthread-to-print-2-d-array/42702846#42702846
* https://stackoverflow.com/questions/65118339/regex-match-nested-parameters
* https://stackoverflow.com/questions/52929990/how-to-change-background-color-on-tabbar-on-scroll-in-ionic-4/55414981#55414981
* https://www.youtube.com/watch?v=0ZJgIjIuY7U
* https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once
* https://legacy.reactjs.org/docs/components-and-props.html
* https://www.freecodecamp.org/news/how-to-use-react-components/
* https://www.youtube.com/watch?v=oNwD3YYzK-I
* https://builtin.com/software-engineering-perspectives/useselector-usedispatch-react-redux
* https://www.geeksforgeeks.org/react-bootstrap-dropdown-component/
* https://react-bootstrap.netlify.app/docs/components/dropdowns/
* https://getbootstrap.com/docs/4.0/getting-started/introduction/
* https://stackoverflow.com/questions/71169840/how-to-display-react-bootstrap-card-component-side-by-side-horizontally
* https://codesandbox.io/p/sandbox/react-bootstrap-cards-lfeki
* https://stackoverflow.com/questions/43062002/changing-dynamic-text-with-external-xml-file
* https://stackoverflow.com/questions/29958328/r-keeping-the-top-10-rows-for-each-date-in-my-data-frame/29958542#29958542
* https://github.com/reduxjs/redux
* https://react-redux.js.org/introduction/getting-started
* https://www.youtube.com/watch?app=desktop&v=DvR-kOl2_SM
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
* https://css-tricks.com/snippets/css/complete-guide-grid/
* https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
* 