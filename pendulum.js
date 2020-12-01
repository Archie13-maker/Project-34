class pendulum{
    constructor(x,y,color){
    var options={
     // isStatic:true,
      'restitution':1,
      density:2,
      'friction':0,
      'frictionAir':0.0,
      'slop':1,
      'inertia': Infinity
    }
    this.body=Bodies.circle(x,y,40,options);
    this.x=x;
    this.y=y;
    this.color= color;
    World.add(world, this.body);
    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(2);
    stroke("white");
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0,0,60,60);
    pop()
    
    }
    }