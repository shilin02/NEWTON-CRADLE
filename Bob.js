class Bob{
    constructor(x,y,r){
        var options = {
            'isStatic' : false,
            'restitution' : 0,
            'friction' : 1,
            'density': 0.8
        }

        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body)
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(CENTER)
        fill("blue")
        ellipse(0,0,this.r *2,this.r *2)
        pop();
    }
}