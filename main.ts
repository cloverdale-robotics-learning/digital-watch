input.onGesture(Gesture.SixG, function () {
    if (minutes < 10) {
        time = "0" + minutes
    } else {
        time = convertToText(minutes)
    }
    time = "" + hours + ":" + time
    basic.showString(time)
})
input.onGesture(Gesture.Shake, function () {
    if (hours < 13) {
        ampm = "AM"
    } else {
        ampm = "PM"
        hours += -12
    }
    if (minutes < 10) {
        time = "0" + minutes
    } else {
        time = convertToText(minutes)
    }
    time = "" + hours + ":" + time + ampm
    basic.showString(time)
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showNumber(hours)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(minutes)
    basic.pause(1000)
    basic.clearScreen()
})
let ampm = ""
let time = ""
let hours = 0
let minutes = 0
minutes = 9
hours = 3
basic.forever(function () {
    basic.pause(60000)
    minutes += 1
    if (minutes == 60) {
        hours += 1
        minutes = 0
        if (hours == 24) {
            hours = 0
        }
    }
})
