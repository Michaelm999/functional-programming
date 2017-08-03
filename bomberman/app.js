class DisplayObject {
  constructor(props){
    Object.assign(this, props)
    this.vx = this.vx || 0
    this.vy = this.vy || 0
    allSprites.push(this)
  }
  update(){
    this.x = this.x + this.vx
    this.y = this.y + this.vy
  }
  keepWithin(x1,y1, x2, y2){
  if(this.x < x1) this.x = x1
  if(this.y < y1) this.y = y1
  if(this.x+this.w > x2) this.x = x2-this.w
  if(this.y+this.h > y2) this.y = y2-this.h
  }
}
class Player extends DisplayObject{
  constructor(props){
    super(props)
  }
  update(){
    super.update()
    this.keepWithin(0,0, width, height)
  }
  render(){
  image(this.pic, this.x, this.y)
  }
}

class Box extends DisplayObject {
  constructor(props) {
    super(props)
  }
  collidesWith(other){
    return (this.x < other.x + other.w
          &&other.x < this.x + this.w
          &&this.y < other.y + other.h
          &&other.y < this.y + this.h)
  }
  update(){
    super.update()

if (this.collidesWith(guy)){
  guy.vx=0
  guy.vy=0
  this.color='red'
} else {
  this.color='yellow'
}
}
  render(){
    fill(this.color)
    rect(this.x, this.y, this.w, this.h)
  }
}

class Bomb extends DisplayObject {
  constructor(props) {
    super(props)
    this.duration = this.duration || 3000
    this.created = Date.now()
    this.expires = this.created+this.duration
  }
  collidesWith(other){
    return (this.x < other.x + other.w
          &&other.x < this.x + this.w
          &&this.y < other.y + other.h
          &&other.y < this.y + this.h)
  }
  explode(){
    if (this.collidesWith(guy)){
      guy.x=50
      guy.y=0
      alert('Game Over. Try Again');
    }
    var bombIndex = allSprites.indexOf(this)
    allSprites.splice(bombIndex, 1)
  }
  update(){
    if (this.expires < Date.now()) {
      this.explode()
    }
  }
  render(){
    fill(this.color)
    ellipse(this.x, this.y, this.w, this.h)
  }
}
var guy
var guyPic
var blocks
var bombs
var allSprites

function preload() {
  guyPic = loadImage('bomberman.png')
}

function setup() {
  createCanvas(400, 300)
  allSprites=[]

  guyPic.resize(50, 50)
  guy = new Player({x: 51, y: 0, pic: guyPic, vx: 0, vy: 0, w: 50, h: 50})
  blocksPositions = [{x:0, y: 0}, {x:width-50, y: 0},
     {x:0, y: height-50}, {x:width-50, y: height-50}, {x:width/2 - 50/2, y: height/2 - 50/2},
     {x:width/2 - 50/2, y: 0}, {x:width/2 - 50/2, y: height-50},
   ]
  blocks = blocksPositions.map(pos => new Box({x: pos.x, y: pos.y, w: 50, h: 50, color: 'yellow'}) )
  bombs = []
}

function draw() {
  background('green')
  allSprites.forEach(sprite => sprite.update())
  allSprites.forEach(sprite => sprite.render())
  guy.render()
}



function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) {
    guy.vx=-1
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    guy.vx=1
  } else {guy.vx=0}
  if (keyIsDown(UP_ARROW)) {
    guy.vy=-1
  }
  else if (keyIsDown(DOWN_ARROW)) {
    guy.vy=1
  }else{guy.vy=0}
  if (keyCode===32) {
    new Bomb({x: guy.x+(guy.w/2), y: guy.y+(guy.h/2), w: 40, h: 40, color: 'black'})
  }
}

function keyReleased() {
if (keyCode===RIGHT_ARROW || keyCode===LEFT_ARROW) {
  guy.vx=0
}
if (keyCode===UP_ARROW || keyCode===DOWN_ARROW) {
  guy.vy=0
  }
}
