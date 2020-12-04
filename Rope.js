class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add (world,this.rope);
    }
    display(){
        var body1 = this.rope.bodyA.position;
        var body2 = this.rope.bodyB.position;
        fill ("white");
        strokeWeight (3);
        line ( body1.x, body1.y,body2.x,body2.y);
    }
    }