// Done
// create a class and export it
export class Circle {
    constructor(radius){
        _radius.set(this, radius);
    
    }
    draw(){
        console.log("circle with the radius" + _radius.get(this));

    }
}
// creating a weak map in set
const _radius = new WeakMap();
