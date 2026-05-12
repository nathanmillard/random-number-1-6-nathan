let right_number = randint(1, 6)
game.splash("pick a number 1-6")
let number = game.askForNumber("1-6")
if (number == right_number) {
    game.splash("you won! the number was  " + right_number)
} else {
    game.splash("you lost the number was  " + right_number)
}
