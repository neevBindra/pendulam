class Bob{
    constructor(x,y){
    var op = {
        isStatic:true
    }
       this.body = Bodies.circle(x,y,50,op)
        World.add(world,this.body);
      
    }
    display(){
        var pos = this.body.position;
     
        fill ("pink")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,30);

    }

}