input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    if (700 <= pins.analogReadPin(AnalogPin.P1)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(3000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
