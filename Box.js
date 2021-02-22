class Box{
    constructor(x,y,width,heigth){
        var options = {
            'restitution':1
        }
        this.body = Bodies.rectangle(200,300,50,50,options)
        World.add(world,this.body)
    }
    display(){
        fill(255)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}