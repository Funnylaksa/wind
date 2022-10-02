basic.forever(function () {
    basic.pause(100)
    basic.showNumber(Environment.ReadWindSpeed(AnalogPin.P2))
    led.plotBarGraph(
    Environment.ReadWindSpeed(AnalogPin.P2) / 10,
    10
    )
})
