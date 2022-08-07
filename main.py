def mover_inimigo_3():
    global ey_1, speed, ex_1
    plotar_inimigo_3(False)
    ey_1 += 1
    contar_score()
    plotar_inimigo_3(True)
    if ey_1 > 4:
        ey_1 = -1
        speed += 5
        ex_1 = randint(0, 4)
    if speed < 300:
        basic.pause(300 - speed)
def desenhar():
    if estado == 0:
        if modo == 0:
            basic.show_icon(IconNames.SMALL_HEART)
        elif modo == 1:
            basic.show_icon(IconNames.HEART)
        elif modo == 2:
            basic.show_icon(IconNames.GHOST)
def multiplayer():
    global estado
    radio.send_number(9)
    if modo == 0:
        estado += 1
        if estado == 4:
            estado = 0
    if modo == 1:
        estado += 10
        if estado == 40:
            estado = 0
    if modo == 2:
        estado += 100
        if estado == 400:
            estado = 0
    estados()

def on_received_number(receivedNumber):
    global players
    if receivedNumber == 12345:
        multiplayer()
    if receivedNumber == 9:
        players += 1
radio.on_received_number(on_received_number)

def mudar_estado():
    global estado
    if radio2 == 0 or estado != 0 and estado != 1 and estado != 10 and estado != 100:
        if modo == 0:
            estado += 1
            if estado == 4:
                estado = 0
        if modo == 1:
            estado += 10
            if estado == 40:
                estado = 0
        if modo == 2:
            estado += 100
            if estado == 400:
                estado = 0
        estados()
    else:
        radio.send_number(12345)
        multiplayer()
def EsquerdaParede():
    global px
    if px > 0:
        px += -1
def set_estado_1():
    global desenhou_dsclp
    mudar_estado()
    basic.clear_screen()
    desenhou_dsclp = 0
def Iniciar():
    global vivo, ex_1, ex_2, ey_1, ey_2, speed, px, py, score
    basic.clear_screen()
    vivo = True
    ex_1 = randint(0, 4)
    ex_2 = randint(0, 4)
    while ex_1 == ex_2:
        ex_2 = randint(0, 4)
    ey_1 = -1
    ey_2 = -1
    speed = 0
    px = 2
    py = 4
    score = 0
def estado_0():
    global modo, desenhou_dsclp
    modo = 0
    desenhou_dsclp = -1
def contar_score():
    global score
    if ey_1 == 4:
        score += 1

def on_button_pressed_a():
    global radio2
    if estado == 1 or estado == 10 or estado == 100:
        uplotar_player(px, py)
        EsquerdaParede()
    if estado == 0:
        radio2 += 1
        if radio2 == 10:
            radio2 = 0
        basic.show_number(radio2)
    radio.send_string("a")
input.on_button_pressed(Button.A, on_button_pressed_a)

def estados():
    if estado == 1 or estado == 10 or estado == 100:
        Iniciar()
def plotar_inimigo_2(eplot_2: bool):
    if not (eplot_2):
        led.unplot(ex_1, ey_1)
        led.unplot(ex_2, ey_2)
    else:
        led.plot(ex_1, ey_1)
        led.plot(ex_2, ey_2)
def se_morreu():
    global vivo, ey_1, ey_2, gg
    if ex_1 == px and py == ey_1 or ex_2 == px and ey_2 == py:
        vivo = False
        uplotar_player(px, py)
        uplotar_enemy(ex_1, ey_1)
        uplotar_enemy(ex_2, ey_2)
        ey_1 = 9
        ey_2 = 9
        if radio2 == 0:
            mudar_estado()
        if radio2 != 0 and gg == False:
            basic.show_number(players + 1)
            radio.send_string("LUL")
        elif radio2 != 0 and gg == True:
            basic.show_number(players + 1)
            gg = False
            mudar_estado()
def PlotarPlayer(x: number, y: number):
    led.plot(x, y)
def uplotar_player(x2: number, y2: number):
    led.unplot(x2, y2)
def tocar_musica():
    music.play_melody("B G - A F C - D ", 120 + musica)
def uplotar_enemy(x3: number, y3: number):
    led.unplot(x3, y3)

def on_button_pressed_ab():
    if estado == 0:
        set_estado_1()
    if estado == 3 or estado == 2:
        mudar_estado()
    elif estado == 300 or estado == 200:
        mudar_estado()
    elif estado == 30 or estado == 20:
        mudar_estado()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    global players, gg
    if receivedString == "LUL":
        players += -1
        if players == 0:
            gg = True
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    if estado == 0:
        mudar_modo()
    if estado == 1 or estado == 10 or estado == 100:
        uplotar_player(px, py)
        DireitaParede()
input.on_button_pressed(Button.B, on_button_pressed_b)

def mover_inimigo():
    global ey_1, speed, ex_1
    plotar_inimigo(False)
    ey_1 += 1
    contar_score()
    plotar_inimigo(True)
    if ey_1 > 4:
        ey_1 = -1
        speed += 5
        ex_1 = randint(0, 4)
    if speed < 300:
        basic.pause(300 - speed)
def DireitaParede():
    global px
    if px < 4:
        px += 1
def plotar_inimigo_3(eplot2: bool):
    if not (eplot2):
        led.unplot(ex_1, ey_1)
    elif ey_1 == 0:
        led.plot(ex_1, ey_1)
def mover_inimigo_2():
    global ey_1, ey_2, speed, ex_2, ex_1
    plotar_inimigo_2(False)
    ey_1 += 1
    ey_2 += 1
    contar_score()
    plotar_inimigo_2(True)
    if ey_2 > 4:
        ey_1 = -1
        ey_2 = -1
        speed += 1
        ex_2 = randint(0, 4)
        ex_1 = randint(0, 4)
        while ex_1 == ex_2:
            ex_2 = randint(0, 4)
    if speed < 300:
        basic.pause(300 - speed)
def plotar_inimigo(eplot: bool):
    if not (eplot):
        led.unplot(ex_1, ey_1)
    else:
        led.plot(ex_1, ey_1)
def mudar_modo():
    global modo
    modo += 1
    if modo == 3:
        modo = 0
high_score_3 = 0
high_score_2 = 0
high_score = 0
musica = 0
score = 0
py = 0
ey_2 = 0
ex_2 = 0
vivo = False
desenhou_dsclp = 0
px = 0
radio2 = 0
modo = 0
estado = 0
ex_1 = 0
speed = 0
ey_1 = 0
players = 0
gg = False
gg = False
players = 0

def on_forever():
    global high_score, high_score_2, high_score_3
    if estado == 3:
        basic.clear_screen()
        if score > high_score:
            high_score = score
        basic.show_number(high_score)
    elif estado == 30:
        basic.clear_screen()
        if score > high_score_2:
            high_score_2 = score
        basic.show_number(high_score_2)
    elif estado == 300:
        basic.clear_screen()
        if score > high_score_3:
            high_score_3 = score
        basic.show_number(high_score_3)
basic.forever(on_forever)

def on_forever2():
    if radio2 != 0:
        radio.set_group(radio2)
basic.forever(on_forever2)

def on_forever3():
    desenhar()
basic.forever(on_forever3)

def on_forever4():
    if estado == 0 and desenhou_dsclp == 0:
        estado_0()
basic.forever(on_forever4)

def on_forever5():
    if estado == 1 or estado == 10 or estado == 100:
        if vivo == True:
            PlotarPlayer(px, py)
basic.forever(on_forever5)

def on_forever6():
    if estado == 1 or estado == 10 or estado == 100:
        se_morreu()
basic.forever(on_forever6)

def on_forever7():
    if estado == 1:
        if vivo == True:
            plotar_inimigo(True)
    if estado == 10:
        if vivo == True:
            plotar_inimigo_2(True)
basic.forever(on_forever7)

def on_forever8():
    if estado == 10:
        if vivo == True:
            mover_inimigo_2()
basic.forever(on_forever8)

def on_forever9():
    if estado == 100:
        if vivo == True:
            mover_inimigo_3()
basic.forever(on_forever9)

def on_forever10():
    if estado == 2:
        basic.show_number(score)
    elif estado == 20:
        basic.show_number(score)
    elif estado == 200:
        basic.show_number(score)
basic.forever(on_forever10)

def on_forever11():
    if estado == 1:
        if vivo == True:
            mover_inimigo()
basic.forever(on_forever11)

def on_forever12():
    global musica
    if estado == 1 or (estado == 10 or estado == 100):
        tocar_musica()
        musica += 5
    else:
        musica = 0
basic.forever(on_forever12)

def on_forever13():
    global players
    if estado == 3 or (estado == 30 or estado == 300):
        players = 0
basic.forever(on_forever13)
