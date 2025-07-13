// Exemplo com p5.js (gráfico de funções)
function setup() {
    const canvas = createCanvas(600, 400);
    canvas.parent('canvas-grafico');
}

function draw() {
    background(240);
    drawAxes();
    plotFunction(x => x * x, 'red'); // Exemplo: função quadrática
}

function drawAxes() {
    line(0, height / 2, width, height / 2); // Eixo X
    line(width / 2, 0, width / 2, height);  // Eixo Y
}

function plotFunction(fn, color) {
    stroke(color);
    noFill();
    beginShape();
    for (let x = -10; x <= 10; x += 0.1) {
        const y = -fn(x); // Inverte Y para coordenadas cartesianas
        vertex(map(x, -10, 10, 0, width), map(y, -10, 10, height, 0));
    }
    endShape();
}