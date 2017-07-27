class DispalyObject {
  constructor(props) {
    Object.assign(this, props)
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
  guy = new DispalyObject({x: 0, y: 0, pic: bguyPic})
}

function draw() {
  background('pink')
  guy.render()
  // image(bguyPic, guyX, guyY)//image, x, y
}
