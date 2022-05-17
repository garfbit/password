input.onButtonPressed(Button.A, function () {
    Entrada = "" + Entrada + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (Codigo == Entrada) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(500)
    basic.clearScreen()
    Entrada = ""
})
input.onButtonPressed(Button.B, function () {
    Entrada = "" + Entrada + "B"
})
let Entrada = ""
let Codigo = ""
Codigo = "AABAA"
Entrada = ""
