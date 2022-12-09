let value = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.setBrightness(50)
basic.forever(function () {
    value = pins.map(
    pins.analogReadPin(AnalogPin.P1),
    5,
    800,
    1,
    Math.round(24)
    )
    strip.setPixelColor(value, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    strip.clear()
})
