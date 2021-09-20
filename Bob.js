class Bob{
	constructor(x,y,r)
	{
		
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r);
		World.add(world, this.body);

	}
	display(){
	ellipse(0,0,this.r, this.r);
	}

}