let tractorX = 0;
let moving = false;
let fieldColor;

function setup() {
    let canvas = createCanvas(800, 400);
    canvas.parent('canvas-container');
    fieldColor = color(144, 238, 144); // Cor do campo
    
    // Botões de controle
    document.getElementById('start-btn').onclick = () => moving = true;
    document.getElementById('stop-btn').onclick = () => moving = false;
}

function draw() {
    // Céu
    background(135, 206, 235);
    
    // Sol
    fill(255, 255, 0);
    noStroke();
    ellipse(700, 100, 80, 80);
    
    // Campo
    fill(fieldColor);
    rect(0, 300, width, 100);
    
    // Linhas do campo
    stroke(0, 100, 0);
    for (let y = 320; y < height; y += 20) {
        line(0, y, width, y);
    }
    
    // Desenha o trator
    drawTractor(tractorX, 280);
    
    // Move o trator
    if (moving) {
        tractorX += 2;
        if (tractorX > width + 100) {
            tractorX = -100;
        }
    }
}

function drawTractor(x, y) {
    // Corpo principal
    fill(200, 0, 0);
    rect(x, y, 150, 70, 10);
    
    // Cabine
    fill(220);
    rect(x + 100, y - 50, 50, 50, 5);
    
    // Janelas
    fill(135, 206, 235);
    rect(x + 110, y - 40, 15, 15);
    rect(x + 125, y - 40, 15, 15);
    
    // Rodas
    fill(50);
    ellipse(x + 40, y + 70, 60, 60); // Roda traseira
    ellipse(x + 120, y + 70, 50, 50); // Roda dianteira
    
    // Detalhes
    fill(100);
    ellipse(x + 40, y + 70, 30, 30); // Centro roda traseira
    ellipse(x + 120, y + 70, 25, 25); // Centro roda dianteira
    
    // Escape
    fill(70);
    rect(x + 20, y - 10, 10, 30);
    
    // Farol
    fill(255, 255, 0);
    ellipse(x + 150, y + 30, 15, 15);
}