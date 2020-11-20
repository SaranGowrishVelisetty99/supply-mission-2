class Box{
    constructor(x,y,width,height)
    {
        this.box = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.box); 
        Matter.Body.setStatic(this.box , true);
    }
    display()
    {
      var pos =this.box.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height,);
      pop();
    }
}