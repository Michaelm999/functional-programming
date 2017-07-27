class DispalyObject {
  constructor(props) {
    Object.assign(this, props)
  }
  update(){
    this.x = this.x+this.vx
    this.y = this.y+this.vy
  }
  render(){
    image(this.pic, this.x, this.y)
  }
}

var guy
var bguyPic

function preload() {
  bguyPic = loadImage("bomberman.png")
}

function setup() {
  createCanvas(400, 300)
  bguyPic.resize(50, 50)
  guy = new DispalyObject({x: 0, y: 0, pic: bguyPic, vx: 0, vy: 0})
}

function draw() {
  background('pink')
  guy.update()
  guy.render()
}

function keyPressed() {
  if (keyCode===RIGHT_ARROW) {
    guy.vx=1
  }
  if (keyCode===LEFT_ARROW) {
    guy.vx=-1
  }
  if (keyCode===UP_ARROW) {
    guy.vy=1
  }
  if (keyCode===DOWN_ARROW) {
    guy.vy=-1
  }
}
function keyReleased() {
  guy.vx=0
  guy.vy=0
}
