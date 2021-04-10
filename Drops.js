class Drops{
  constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };




















































//   class Drops {
//   constructor(x,y,r) {
//     var options = {
//         isStatic: true,
//         restitution:0,
//         friction:1,
//         density:1.0
        
//     }
//     this.body = Bodies.circle(x,y,r,options);
//     this.width = width;
//    this.r = r
  
//     World.add(world, this.body);
//   }
//   display(){
//     var pos =this.body.position;
//     push()
//     translate(pos.x,pos.y)
//     rectMode(CENTER);
//     fill("blue");
//     imageMode(CENTER)
//    // image(this.image,0,0,this.r*2,this.r*2)
//    // rect(pos.x, pos.y, this.width, this.height);
//    pop()
//   }
// };