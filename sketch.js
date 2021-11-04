

let counter = 0 ;
let title_font ;
let light_font ;

function preload() {
  title_font = loadFont('Montserrat-BoldItalic.ttf') ;
  light_font = loadFont('Montserrat-Light.ttf') ;
}

function setup() {
  createCanvas(1980, 1080);
  background(255);
  
  
}

function draw() {
  background(255);
  
  print("mouseX is " + mouseX + " mouseY is" + mouseY) ;
  
  //banner website
  noStroke() ;
  fill(255, 205, 178) ;
  rect(0,150,width,height-150) ;
  
  fill(0) ;
  textAlign(LEFT) ;
  textFont(title_font) ;
  textSize(50) ;
  text("KiraMico", 100, height/12) ;
  textFont(light_font) ;
  textSize(25) ;
  text("sparkle glitter", 100, height/12 + 20)
  
  
  expanding_text("thoughts", 500, height/12+10) ;
  expanding_text("random", 700, height/12+10) ;
  expanding_text("about", 900, height/12+10) ;
  
  if(counter === 0) {
    text("this is the home page, click menu to navigate", 300, height/3)
  } else if( counter ===1) {
    text("thoughts page!!!!", 300, height/3)
  }
  
  clicking(500, height/12+10, 1) ;

}

function expanding_text(a, x, y){
  if(pmouseX > x+10 && pmouseX < x+60 && pmouseY > y-15 && pmouseY < y) {
    textSize(23) ;
    text(a, x, y) ;
  } else {
    textSize(20) ;
    text(a, x, y) ;
  }

}

function clicking(x, y, a) {
  if(pmouseX > x+10 && pmouseX < x+60 && pmouseY > y-15 && pmouseY < y && mouseIsPressed) {
    counter = a ;
  } 
}