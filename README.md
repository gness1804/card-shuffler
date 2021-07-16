# Card Shuffler

<img src="https://github.com/gness1804/card-shuffler/blob/master/src/assets/demo.png" width="450">

> Shuffles a virtual deck of cards.

<br />

## Install

```
git clone https://github.com/gness1804/card-shuffler.git
cd card-shuffler
yarn install
```

<br />

## Running the app:
In the project root, run `yarn start`. This will spin up a React server which will serve up the app at [http://localhost:3000/](http://localhost:3000/). (To change the port, add `PORT=8080` or whatever port you wish to a `.env` file in the root.)

<br />

## Using the app:
After navigating to the app running the browser, you will see four cards in the top part of the app and 44 other cards further down. There is a "Reshuffle" button between these sets of cards. The app automatically generates and sorts a virtual deck of 52 cards with the standard ranks (Ace through King) and suits (Diamonds, Hearts, Spades, Clubs). The first four of these cards appears on the top part of the app and the remaining 48 lower down in miniature form. Pressing the "Reshuffle" button will reshuffle the entire deck.

<br />

## Testing:
There are several tests of the app's basic functionality. To run all the tests, run `yarn test` and then press `a`. The system will re-run the tests covering files that change on save.

<br />

## Config notes:
This app uses [eslint](https://eslint.org/) for JavaScript code sanitation and [prettier](https://prettier.io/) for code formatting. The command `yarn lint` will run both against the code in the project. `yarn fix` will fix all the issues that can be fixed automatically.

**NOTE**: To keep eslint errors from crashing the app on localhost, add the following to a .env file:
`ESLINT_NO_DEV_ERRORS=true`

<br />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
