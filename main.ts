let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
music.setVolume(140)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
    basic.pause(100)
})
