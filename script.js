/* ------ JavaScript - Randomized Fractal Snow Flakes ------ */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const maxLevel = 4; // maxLevel value determines how many twigs get drawn from the branches. Level 6 makes nice shapes but might take longer to render. 
const branches = 2;
const sides = Math.floor((Math.random() * 10) + 3);
const spread = (Math.random() * 48) + 0.51;

ctx.translate(canvas.width / 2, canvas.height / 2);

const angle = Math.PI * 2 * spread;

function drawLine(level) {
    if (level > maxLevel) return;

    ctx.strokeStyle = 'lightblue'; // strokeStyle allows us to set the colour value.
    ctx.lineWidth = 6; // LineWidth value controls the thickness of each line drawn.
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 0); // when lineTo value (200) is different to that of ctx.translate (200). The fractal will develop gaps between the lines.
    ctx.stroke();

    for (let i = 1; i < branches + 1; i++) {
        ctx.save();
        ctx.translate(200 * i / (branches + 1), 0); // Here is the ctx.translate (200) value mentioned above.
        ctx.scale(0.5, 0.5);
        ctx.save();

        ctx.rotate(angle);
        drawLine(level + 1);
        ctx.restore();
        ctx.save();

        ctx.rotate(-angle);
        drawLine(level + 1);
        ctx.restore();

        ctx.restore();
    }
}
for (let i = 0; i < sides; i++) { // The middle number value (sides) determines how many sides there are.
    drawLine(0);
    ctx.rotate(Math.PI * 2 / sides); // The divisional number (sides) determines how many branches there are. Ideally, both numbers should be set as the same value.
}
// ---- This function refreshes the page to auto generate fresh fractal shapes.
setTimeout(() => {
    window.location.reload(true);
}, 1500); // this value (1000) is equal to one second.
setTimeout();

