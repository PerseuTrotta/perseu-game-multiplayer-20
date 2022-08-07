function mover_inimigo_3 () {
    plotar_inimigo_3(false)
    ey_1 += 1
    contar_score()
    plotar_inimigo_3(true)
    if (ey_1 > 4) {
        ey_1 = -1
        speed += 5
        ex_1 = randint(0, 4)
    }
    if (speed < 300) {
        basic.pause(300 - speed)
    }
}
function desenhar () {
    if (estado == 0) {
        if (modo == 0) {
            basic.showIcon(IconNames.SmallHeart)
        } else if (modo == 1) {
            basic.showIcon(IconNames.Heart)
        } else if (modo == 2) {
            basic.showIcon(IconNames.Ghost)
        }
    }
}
function multiplayer () {
    radio.sendNumber(9)
    if (modo == 0) {
        estado += 1
        if (estado == 4) {
            estado = 0
        }
    }
    if (modo == 1) {
        estado += 10
        if (estado == 40) {
            estado = 0
        }
    }
    if (modo == 2) {
        estado += 100
        if (estado == 400) {
            estado = 0
        }
    }
    estados()
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12345) {
        multiplayer()
    }
    if (receivedNumber == 9) {
        players += 1
    }
})
function mudar_estado () {
    if (radio2 == 0 || estado != 0 && estado != 1 && estado != 10 && estado != 100) {
        if (modo == 0) {
            estado += 1
            if (estado == 4) {
                estado = 0
            }
        }
        if (modo == 1) {
            estado += 10
            if (estado == 40) {
                estado = 0
            }
        }
        if (modo == 2) {
            estado += 100
            if (estado == 400) {
                estado = 0
            }
        }
        estados()
    } else {
        radio.sendNumber(12345)
        multiplayer()
    }
}
function EsquerdaParede () {
    if (px > 0) {
        px += -1
    }
}
function set_estado_1 () {
    mudar_estado()
    basic.clearScreen()
    desenhou_dsclp = 0
}
function Iniciar () {
    basic.clearScreen()
    vivo = true
    ex_1 = randint(0, 4)
    ex_2 = randint(0, 4)
    while (ex_1 == ex_2) {
        ex_2 = randint(0, 4)
    }
    ey_1 = -1
    ey_2 = -1
    speed = 0
    px = 2
    py = 4
    score = 0
}
function estado_0 () {
    modo = 0
    desenhou_dsclp = -1
}
function contar_score () {
    if (ey_1 == 4) {
        score += 1
    }
}
input.onButtonPressed(Button.A, function () {
    if (estado == 1 || estado == 10 || estado == 100) {
        uplotar_player(px, py)
        EsquerdaParede()
    }
    if (estado == 0) {
        radio2 += 1
        if (radio2 == 10) {
            radio2 = 0
        }
        basic.showNumber(radio2)
    }
    radio.sendString("a")
})
function estados () {
    if (estado == 1 || estado == 10 || estado == 100) {
        Iniciar()
    }
}
function plotar_inimigo_2 (eplot_2: boolean) {
    if (!(eplot_2)) {
        led.unplot(ex_1, ey_1)
        led.unplot(ex_2, ey_2)
    } else {
        led.plot(ex_1, ey_1)
        led.plot(ex_2, ey_2)
    }
}
function se_morreu () {
    if (ex_1 == px && py == ey_1 || ex_2 == px && ey_2 == py) {
        vivo = false
        uplotar_player(px, py)
        uplotar_enemy(ex_1, ey_1)
        uplotar_enemy(ex_2, ey_2)
        ey_1 = 9
        ey_2 = 9
        if (radio2 == 0) {
            mudar_estado()
        }
        if (radio2 != 0 && gg == false) {
            basic.showNumber(players + 1)
            radio.sendString("LUL")
        } else if (radio2 != 0 && gg == true) {
            basic.showNumber(players + 1)
            gg = false
            mudar_estado()
        }
    }
}
function PlotarPlayer (x: number, y: number) {
    led.plot(x, y)
}
function uplotar_player (x2: number, y2: number) {
    led.unplot(x2, y2)
}
function tocar_musica () {
    music.playMelody("B G - A F C - D ", 120 + musica)
}
function uplotar_enemy (x3: number, y3: number) {
    led.unplot(x3, y3)
}
input.onButtonPressed(Button.AB, function () {
    if (estado == 0) {
        set_estado_1()
    }
    if (estado == 3 || estado == 2) {
        mudar_estado()
    } else if (estado == 300 || estado == 200) {
        mudar_estado()
    } else if (estado == 30 || estado == 20) {
        mudar_estado()
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "LUL") {
        players += -1
        if (players == 0) {
            gg = true
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (estado == 0) {
        mudar_modo()
    }
    if (estado == 1 || estado == 10 || estado == 100) {
        uplotar_player(px, py)
        DireitaParede()
    }
})
function mover_inimigo () {
    plotar_inimigo(false)
    ey_1 += 1
    contar_score()
    plotar_inimigo(true)
    if (ey_1 > 4) {
        ey_1 = -1
        speed += 5
        ex_1 = randint(0, 4)
    }
    if (speed < 300) {
        basic.pause(300 - speed)
    }
}
function DireitaParede () {
    if (px < 4) {
        px += 1
    }
}
function plotar_inimigo_3 (eplot2: boolean) {
    if (!(eplot2)) {
        led.unplot(ex_1, ey_1)
    } else if (ey_1 == 0) {
        led.plot(ex_1, ey_1)
    }
}
function mover_inimigo_2 () {
    plotar_inimigo_2(false)
    ey_1 += 1
    ey_2 += 1
    contar_score()
    plotar_inimigo_2(true)
    if (ey_2 > 4) {
        ey_1 = -1
        ey_2 = -1
        speed += 1
        ex_2 = randint(0, 4)
        ex_1 = randint(0, 4)
        while (ex_1 == ex_2) {
            ex_2 = randint(0, 4)
        }
    }
    if (speed < 300) {
        basic.pause(300 - speed)
    }
}
function plotar_inimigo (eplot: boolean) {
    if (!(eplot)) {
        led.unplot(ex_1, ey_1)
    } else {
        led.plot(ex_1, ey_1)
    }
}
function mudar_modo () {
    modo += 1
    if (modo == 3) {
        modo = 0
    }
}
let high_score_3 = 0
let high_score_2 = 0
let high_score = 0
let musica = 0
let score = 0
let py = 0
let ey_2 = 0
let ex_2 = 0
let vivo = false
let desenhou_dsclp = 0
let px = 0
let radio2 = 0
let modo = 0
let estado = 0
let ex_1 = 0
let speed = 0
let ey_1 = 0
let players = 0
let gg = false
gg = false
players = 0
basic.forever(function () {
    if (estado == 3) {
        basic.clearScreen()
        if (score > high_score) {
            high_score = score
        }
        basic.showNumber(high_score)
    } else if (estado == 30) {
        basic.clearScreen()
        if (score > high_score_2) {
            high_score_2 = score
        }
        basic.showNumber(high_score_2)
    } else if (estado == 300) {
        basic.clearScreen()
        if (score > high_score_3) {
            high_score_3 = score
        }
        basic.showNumber(high_score_3)
    }
})
basic.forever(function () {
    if (radio2 != 0) {
        radio.setGroup(radio2)
    }
})
basic.forever(function () {
    desenhar()
})
basic.forever(function () {
    if (estado == 0 && desenhou_dsclp == 0) {
        estado_0()
    }
})
basic.forever(function () {
    if (estado == 1 || estado == 10 || estado == 100) {
        if (vivo == true) {
            PlotarPlayer(px, py)
        }
    }
})
basic.forever(function () {
    if (estado == 1 || estado == 10 || estado == 100) {
        se_morreu()
    }
})
basic.forever(function () {
    if (estado == 1) {
        if (vivo == true) {
            plotar_inimigo(true)
        }
    }
    if (estado == 10) {
        if (vivo == true) {
            plotar_inimigo_2(true)
        }
    }
})
basic.forever(function () {
    if (estado == 10) {
        if (vivo == true) {
            mover_inimigo_2()
        }
    }
})
basic.forever(function () {
    if (estado == 100) {
        if (vivo == true) {
            mover_inimigo_3()
        }
    }
})
basic.forever(function () {
    if (estado == 2) {
        basic.showNumber(score)
    } else if (estado == 20) {
        basic.showNumber(score)
    } else if (estado == 200) {
        basic.showNumber(score)
    }
})
basic.forever(function () {
    if (estado == 1) {
        if (vivo == true) {
            mover_inimigo()
        }
    }
})
basic.forever(function () {
    if (estado == 1 || (estado == 10 || estado == 100)) {
        tocar_musica()
        musica += 5
    } else {
        musica = 0
    }
})
basic.forever(function () {
    if (estado == 3 || (estado == 30 || estado == 300)) {
        players = 0
    }
})
