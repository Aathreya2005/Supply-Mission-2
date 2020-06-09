class Box{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        fill("red");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,width,height);
        
    }
}