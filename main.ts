let LLUM = 0
input.onButtonPressed(Button.A, function () {
    LLUM += 10
    if (LLUM > 255) {
        LLUM = 255
    }
})
input.onButtonPressed(Button.B, function () {
    LLUM += -10
    if (LLUM < 0) {
        LLUM = 0
    }
})
basic.forever(function () {
    led.setBrightness(LLUM)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    if (LLUM >= 255) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
    }
})
