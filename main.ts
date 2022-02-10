let LLUM = 0
input.onButtonPressed(Button.A, function () {
    music.playTone(3000, music.beat(BeatFraction.Sixteenth))
    LLUM += 10
    if (LLUM > 255) {
        LLUM = 255
    }
})
input.onButtonPressed(Button.B, function () {
    music.playTone(700, music.beat(BeatFraction.Sixteenth))
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
