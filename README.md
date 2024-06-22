# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- [Solution](https://www.frontendmentor.io/solutions/responsive-password-generator-mVkrl4-NaQ)
- [Live Site](https://password-generator-ten-gray.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Bootstrap](https://react-bootstrap.netlify.app/) - React Bootstrap
- [@Emotion](https://emotion.sh/docs/introduction) - Emotion CSS

### What I learned

I was able to use a new library called Emotion which enabled the use of inline pseduo-classes to change the color of the range input as it increases/decreases.

Although I used a simple function to generate a password, I found a few libraries available (one in particular was `crypto browserify`) to generate hashes/passwords based on criteria provided, that could help improve the password generation to be more secure and useful.

### Useful resources

- [Cryto-browserify](https://www.npmjs.com/package/crypto-browserify) - This gave me an idea of to generate a simple password based on criteria

## Author

- Website - [Kris Bachan](https://kris-bachan-portfolio.vercel.app/)
- Frontend Mentor - [@k2pbac](https://www.frontendmentor.io/profile/k2pbac)
