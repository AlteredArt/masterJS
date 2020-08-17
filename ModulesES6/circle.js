// common js modules
// implementation detail
const _radius = new WeakMap();
// public interface

class Circle {
    constructor(radius){
        _radius.set(this, radius);
    
    }
    draw(){
        console.log("circle with the radius" + _radius.get(this));

    }
}

module.exports = Circle;