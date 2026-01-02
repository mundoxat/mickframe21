const c = document.getElementById("bg");
const ctx = c.getContext("2d");

c.width = innerWidth;
c.height = innerHeight;

const dots = Array.from({length: 50}, () => ({
  x: Math.random() * c.width,
  y: Math.random() * c.height,
  r: Math.random() * 2 + 1,
  dx: (Math.random() - .5) * .3,
  dy: (Math.random() - .5) * .3
}));

function draw() {
  ctx.clearRect(0,0,c.width,c.height);
  dots.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    if(p.x<0||p.x>c.width) p.dx*=-1;
    if(p.y<0||p.y>c.height) p.dy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = "#ffffff55";
    ctx.fill();
  });
  requestAnimationFrame(draw);
}

draw();
