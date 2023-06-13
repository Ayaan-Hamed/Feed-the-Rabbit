var e, w, g, b, c, r, bi, fi, ri, bunny, btn

const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

function preload () {
bi = loadImage("./assets/background.png")
fi = loadImage ("./assets/melon.png")
ri = loadImage ("./assets/Rabbit-01.png")
}

function setup() {
 createCanvas(1000,1000);
 e = Matter.Engine.create()
 w = e.world
 g = Matter.Bodies.rectangle(width / 2, height - 10, width, 20, {isStatic: true})
 Matter.World.add(w, g)
 b = Matter.Bodies.circle(width / 2, -10, 50)
 Matter.World.add(w, b)
 ellipseMode(RADIUS)
 rectMode(CENTER)
 imageMode (CENTER)
// c = Matter.Constraint.create({pointA:{x: 100, y: 100}, 
// bodyB: b, length: 100, stiffness: 0.02})
// Matter.World.add(w, c)
r = new Rope (8, {x:width / 2, y:100})
Matter.Composite.add(r.body, b)
c = new Link (r, b)
bunny = createSprite (width / 2, height - 150, 50, 50)
bunny.addImage (ri)
bunny.scale = 0.35
btn = createImg ("./assets/cut_btn.png")
btn.position (430, 80)
btn.size (100, 100) 
btn.mouseClicked (cut)
  
}

function draw() 
{
  background(220);
  image (bi, width / 2, height / 2, width, height)
  Matter.Engine.update(e)
  rect(g.position.x, g.position.y, width, 20)
  image (fi, b.position.x, b.position.y, 100, 100)
  // line(c.pointA.x, c.pointA.y, b.position.x, b.position.y) 
  r.show()
  drawSprites()
  
}


function cut () {
 r.break ()
 c.cut ()
 c = null 

} 



