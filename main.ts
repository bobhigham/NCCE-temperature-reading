// When a program first starts it is good practice to initialise variables etc.
let Internal_Temperature = 0
let External_Temp = 0
// This forever loop repeatedly senses the temperature from the internal sensor and the external "DS" sensor and stores the results in the respective variable.
// 
// It then displays each result in turn on the LED array.
// 
// The simulator allows you to adjust the temperature of the internal sensor but there is no facility to adjust the external sensor output.
basic.forever(function () {
    basic.pause(1000)
    Internal_Temperature = input.temperature()
    External_Temp = dstemp.celsius(DigitalPin.P0)
    basic.showNumber(Internal_Temperature)
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(External_Temp)
    basic.clearScreen()
})
