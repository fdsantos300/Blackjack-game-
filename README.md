# Blackjack Game


## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

A challenge to improve basic JavaScript and CSS knowledge.

### Screenshot

![](https://github.com/fdsantos300/Blackjack-game-/blob/main/Screenshot-bj.png)


### Links


- Live Site URL: https://fdsantos300.github.io/NFT-Card/


### Built with

- HTML5
- CSS Flexbox
- JavaScript
- Markdown

### What I learned

- JavaScript
  - Arrays
  - Objects
  - Booleans
  - If else statements
  - Comparison operators
  - Logical operators
  - For loops
  - The Math object
  - Return statements

- Style hover states for interactive elements
- Apply opacity to background image avoiding child inheritance

To see how you can add code snippets, see below:

```CSS
/*overlay with reduced opacity and background-color on top of the background image*/
.main::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.80);
}
```
```JavaScript
//Math objects
function getRandomCard(){
  let randomNumber = Math.floor(Math.random()*13) + 1
  if (randomNumber === 1){
    return 11
  } else if (randomNumber > 10){
    return 10
  } else {
    return randomNumber
  }
 }
```

### Continued development

Still improving my JavaScript knowledge. This project will be updated as knew skills learned. I would like to include complete card decks arrays along images to be displayed when game starts.

Help and guidance always welcome 😄.


### Useful resources

- [w3schools](https://www.w3schools.com/) - This is an amazing documentation source for HTML, CSS and Java Script.
- [scrimba](https://scrimba.com/learn/learnjavascript) - Amazing interactive source to learn code.


## Author

- Francisco Gonzalez

## Acknowledgments

This work and content is for learning purpose.
