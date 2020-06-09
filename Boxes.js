class Boxes {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(253,179,29);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
