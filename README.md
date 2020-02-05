# Project-1_Tic_TacToe

This project is about creating an online version of the famous game "Tic Tac Toe".
We should implement the knowledge that acquired during the past 2 weeks to design, build, and deploy the game.

# Technical Requirements

Your Tic Tac Toe app must:

Render a game board in the browser
Switch turns between X and O (or whichever markers you select)
Visually display which side won if a player gets three in a row, or show a draw if neither player wins
Include separate HTML / CSS / JavaScript files
Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
Use JavaScript and/or jQuery for DOM manipulation
Deploy your game online, where the rest of the world can access it
We will be walking you through this process!
Use semantic markup for HTML and CSS (adhere to best practices)
Have well-formatted, and well-commented code

# User Stories

- As a user, I should be able to start a new tic tac toe game (DONE)
- As a user, I should be able to click on a square to add X first and then O, and so on (DONE)
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next (DONE)
- As a user, I should not be able to click the same square twice (DONE)
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should be able to play the game again without refreshing the page (DONE)

# Technologies used

- HTML
- CSS
- JavaScript
- jQuery

# Logic

- a player wins if 3 boxes in a row (vertically, horizontally, or from corners) have the same value (cross ||circle)

- The player's turn will be determined based on the counter value (if odd number='cross' || even number='cross')

* Using 'for' loop it will add the events for each time clickd on any of he boxes
