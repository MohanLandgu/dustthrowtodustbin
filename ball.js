class Ball{

constructor(x,y,radius){



    var option={


isStatic:false,
restitution:0.2,
friction:0.3,
density:1.0


    }


this.body=Bodies.circle(x,y,radius,option)
this.radius=radius
World.add(world,this.body);





}


display(){

    
   
    ellipseMode(RADIUS);
    fill("red");
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
   



    
}


}