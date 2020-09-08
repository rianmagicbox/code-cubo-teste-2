input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . # #
        . # . # .
        . # . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
	
})
