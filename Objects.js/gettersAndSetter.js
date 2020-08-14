// use getters to access variables
function Circle (radius){

    this.radius = radius;

    let = defaultLocation = {x:0, y:0};
    this.getDefaultLocation = function(){
        return defaultLocation
    };

    this.draw = function(){
        console.log("draw");
    };
// define a getter and setter
    Object.defineProperty(this, 'defaultLocation', {
         get: function() {
            return defaultLocation;
        },
        set: function(value){
            if (!value.x || !value.y)
            throw new Error('Invalid Location');
            defaultLocation = value;
        }
    })
}

const circle = new Circle(10);
circle.draw();
// invalid location error
circle.defaultLocation = 1