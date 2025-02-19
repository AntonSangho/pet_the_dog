let distance = 0
input.onButtonPressed(Button.A, function () {
    servos.P2.setAngle(45)
})
input.onButtonPressed(Button.B, function () {
    servos.P2.setAngle(105)
})
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance < 20) {
        servos.P2.setAngle(45)
        basic.pause(200)
        servos.P2.setAngle(105)
        basic.pause(200)
    } else {
        distance = 0
    }
})
