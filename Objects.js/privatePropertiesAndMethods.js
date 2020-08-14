function Circle (radius){

    this.radius = radius;

    let = defaultLocation = {x:0, y:0};

    let = computeOptimumLocation = function(factor) {

    }

    this.draw = function(){
    // closure a func inside a func
    // closure what variables are accesible in the functions
    // closure stays , but scope dies
        computeOptimumLocation(0.1);
        // defaultLocation[x]
        // this.radius
        console.log("draw");
    };
}

const circle = new Circle(10);
circle.draw()
// circle.radius