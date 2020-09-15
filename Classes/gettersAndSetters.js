// getters and setters in es6 classes
const _area = new WeakMap();

class Square {
    constructor(area){
        _area.set(this, area);
    }
    get area(){
        return _area.get(this);
    }

    set area(value) {
        if (value <= 0) throw new Error('invalid area')
        _area.set(this, value);
    }
}

const s1 = new Square(5); 
console.log(s1)
console.log("square area", s1.area)