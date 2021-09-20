class rope{
constructor(body1,body2,pointA,pointB)
{

	this.pointA=pointA
	this.pointB=pointB
	
	var options={
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.pointA,y:this.pointB},
		length:200,
		stiffmess:0.1
	}
	//create rope constraint here
	this.string = Constraint.create(options);
	World.add(world,this.string);

	}

    //create display() here 
display(){

line(pointA.x,point.y,pointB.x,pointB.y);

}

}
