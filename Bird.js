class Bird extends Baseclass {
    constructor(x, y) {
     super(x,y,50,50);
     this.image=loadImage("sprites/bird.png")
      
    }
    display()
    {
      var p=this.body.position;
      p.x=mouseX;
      p.y=mouseY;
      super.display();    }
  }
  