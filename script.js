let funcStr = 'sin(x)/x';
let limitPoint = 0;
let range = 5;

function setup() {
    let canvas = createCanvas(800, 400);
    canvas.parent('canvasContainer');
    updateVisualization();
}

function draw() {
    background(255);
    drawAxes();
    drawFunction();
    drawLimitPoint();
}

function drawAxes() {
    stroke(0);
    strokeWeight(1);
    line(0, height / 2, width, height / 2); // X-axis
    line(width / 2, 0, width / 2, height); // Y-axis

    // Draw tick marks and labels
    textAlign(CENTER, CENTER);
    fill(0);
    for (let x = -range; x <= range; x += 1) {
        let px = map(x, -range, range, 0, width);
        line(px, height / 2 - 5, px, height / 2 + 5);
        text(x, px, height / 2 + 20);
    }
    for (let y = -range; y <= range; y += 1) {
        let py = map(y, -range, range, height, 0);
        line(width / 2 - 5, py, width / 2 + 5, py);
        if (y !== 0) text(y, width / 2 - 20, py);
    }
}

function drawFunction() {
    stroke(0, 0, 255);
    strokeWeight(2);
    noFill();
    beginShape();
    for (let px = 0; px < width; px += 1) {
        let x = map(px, 0, width, -range, range);
        try {
            let y = math.evaluate(funcStr, { x: x });
            if (isFinite(y)) {
                let py = map(y, -range, range, height, 0);
                vertex(px, py);
            }
        } catch (e) {
            // Skip undefined points
        }
    }
    endShape();
}

function drawLimitPoint() {
    let px = map(limitPoint, -range, range, 0, width);
    stroke(255, 0, 0);
    strokeWeight(5);
    point(px, height / 2);
    textAlign(CENTER, TOP);
    fill(255, 0, 0);
    text(`x = ${limitPoint}`, px, height / 2 - 20);
}

function updateVisualization() {
    funcStr = document.getElementById('functionInput').value;
    limitPoint = parseFloat(document.getElementById('limitPoint').value);
    range = parseFloat(document.getElementById('rangeSlider').value);
    document.getElementById('error').innerText = '';

    // Calculate function values near the limit point
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    let steps = [0.1, 0.01, 0.001, 0.0001];
    let leftValues = [], rightValues = [];

    for (let step of steps) {
        let xLeft = limitPoint - step;
        let xRight = limitPoint + step;
        try {
            let yLeft = math.evaluate(funcStr, { x: xLeft });
            let yRight = math.evaluate(funcStr, { x: xRight });
            if (isFinite(yLeft)) {
                leftValues.push({ x: xLeft, y: yLeft.toFixed(6), side: 'Left' });
            }
            if (isFinite(yRight)) {
                rightValues.push({ x: xRight, y: yRight.toFixed(6), side: 'Right' });
            }
        } catch (e) {
            document.getElementById('error').innerText = 'Error: Invalid function or undefined at some points.';
        }
    }

    // Populate table
    let values = [...leftValues.reverse(), ...rightValues];
    for (let val of values) {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${val.x.toFixed(6)}</td><td>${val.y}</td><td>${val.side}</td>`;
        tableBody.appendChild(row);
    }
}

document.getElementById('updateButton').addEventListener('click', updateVisualization);
document.getElementById('rangeSlider').addEventListener('input', updateVisualization);
document.getElementById('limitPoint').addEventListener('input', updateVisualization);
document.getElementById('functionInput').addEventListener('change', updateVisualization);