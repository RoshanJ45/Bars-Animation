    const bars = document.getElementById('bars');
const ctx = bars.getContext('2d');
bars.style.width = (bars.width = window.innerWidth);
bars.style.height = (bars.height = window.innerHeight);
const palette = [
'#bb3e03',
'#ae2012',
'#9b2226',
'#005f73',
'#0a9396',
'#94d2bd',
'#e9d8a6',
'#ee9b00',
'#ca6702',
]
const animate = (timeStart) => (time) => {
requestAnimationFrame(() => animate(timeStart)(Date.now() + timeStart));
let x = 0;
let y = 0;
const arr = Array(20);
ctx.fillStyle = `rgba(0, 0, 0, 0.03)`;
ctx.fillRect(0, 0, bars.width, bars.height);
for (let i = 0; i < arr.length; i++) {
arr[i] = (2 - (Math.sin(i + (time / 200)) / 2) * (bars.height));
const r = arr[i];
ctx.fillStyle = palette[(Math.floor(i + (time / 200)) % palette.length)];
const w = 100;
ctx.fillRect(x, bars.height / 2, w, arr[i]);
x += w;
}
}
animate(0)(0);
animate(100)(0);
