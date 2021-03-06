class Man {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
         friction:1,
         density:1.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("walking_1.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill("brown");
      imageMode(CENTER)
      image(this.image,0,0,this.width,this.height)
     // rect(pos.x, pos.y, this.width, this.height);
     pop()
    }
  };