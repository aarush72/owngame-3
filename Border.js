class Bor {
    constructor(x,y,width,height){
    var option = {
    restitution : 0,
    friction : 1,
    density : 0.04,
    isStatic : true
    }
    
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.height = height;
    this.width = width;
    World.add(world,this.body);
    }
    
    display(){
    var angle = this.body.angle;
   
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    strokeWeight(0);
    rectMode(CENTER);
    fill("black");
    rect(0,0,this.width,this.height);
    pop();
    }
    }