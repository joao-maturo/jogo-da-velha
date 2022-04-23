var jogador, vencedor = null;
var jogadorselecionado = document.getElementById(Elementid = 'jogador-selecionado');
var vencedorselecionado = document.getElementById(Elementid = 'vencedor-selecionado');
var quadrados = document.getElementsByClassName(ClassName = 'quadrado');

mudarjogador(valor = 'x')

function escolherquadrado(id) {

    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador
    quadrado.style.color = 255, 255, 255;

    if (jogador === 'x') {
        jogador = 'o'
    } else {
        jogador = 'x'
    }

    mudarjogador(jogador);
    chacavencedor();
}

function mudarjogador(valor) {
    jogador = valor;
    jogadorselecionado.innerHTML = jogador;
}

function chacavencedor() {
    var quadrado1 = document.getElementById(Elementid = '1')
    var quadrado2 = document.getElementById(Elementid = '2')
    var quadrado3 = document.getElementById(Elementid = '3')
    var quadrado4 = document.getElementById(Elementid = '4')
    var quadrado5 = document.getElementById(Elementid = '5')
    var quadrado6 = document.getElementById(Elementid = '6')
    var quadrado7 = document.getElementById(Elementid = '7')
    var quadrado8 = document.getElementById(Elementid = '8')
    var quadrado9 = document.getElementById(Elementid = '9')
    if (checasequencia(quadrado1, quadrado2, quadrado3)) {
        mudacorquadrado(quadrado1, quadrado2, quadrado3);
        mudarvencedor(quadrado1);
        return;
    }
    if (checasequencia(quadrado4, quadrado5, quadrado6)) {
        mudacorquadrado(quadrado4, quadrado5, quadrado6);
        mudarvencedor(quadrado4);
        return;
    }
    if (checasequencia(quadrado7, quadrado8, quadrado9)) {
        mudacorquadrado(quadrado7, quadrado8, quadrado9);
        mudarvencedor(quadrado7);
        return;
    }
    if (checasequencia(quadrado1, quadrado4, quadrado7)) {
        mudacorquadrado(quadrado1, quadrado4, quadrado7);
        mudarvencedor(quadrado1);
        return;
    }
    if (checasequencia(quadrado2, quadrado5, quadrado8)) {
        mudacorquadrado(quadrado2, quadrado5, quadrado8);
        mudarvencedor(quadrado2);
        return;
    }
    if (checasequencia(quadrado3, quadrado6, quadrado9)) {
        mudacorquadrado(quadrado3, quadrado6, quadrado9);
        mudarvencedor(quadrado3);
        return;
    }
    if (checasequencia(quadrado1, quadrado5, quadrado9)) {
        mudacorquadrado(quadrado1, quadrado5, quadrado9);
        mudarvencedor(quadrado1);
        return;
    }
    if (checasequencia(quadrado3, quadrado5, quadrado7)) {
        mudacorquadrado(quadrado3, quadrado5, quadrado7);
        mudarvencedor(quadrado3);
        return;
    }
}





function mudarvencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorselecionado.innerHTML = vencedor;
}

function mudacorquadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#00FF00'
    quadrado2.style.background = '#00FF00'
    quadrado3.style.background = '#00FF00'
}

function checasequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML == quadrado3.innerHTML) {
        eigual = true;

    }
    return eigual;
}

function reiniciar() {
    vencedor = null
    vencedorselecionado.innerHTML = '';

    for (var i = 1; 1 <= 9; i++) {
        var quadrado = document.getElementById(1);
        quadrado.style.backgroundColor = '#eee'
        quadrado.style.color = '#eee'
        quadrado.innerHTML = '-'
    }
    mudarjogador(valor = 'x')
}