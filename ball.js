  
class Ball{
  constructor(x,y,radius){
      var ball_options={
        isStatic:false,
        restitution:1,
        friction:0.5,
        density:1.2
      }
      this.body = Bodies.circle(x,y,radius,ball_options);
      this.radius = radius;
      World.add(world,this.body);
  }
  display(){
      fill("pink");
      ellipse(this.body.position.x,this.body.position.y, this.radius*2,this.radius*2);
  }
}