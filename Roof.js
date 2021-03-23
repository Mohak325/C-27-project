class Roof {
    constructor(x,y){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,500,200,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("black");
        rect(this.body.x,this.body.y,500,200);
    }
}