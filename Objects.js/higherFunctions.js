//ES9

//Object spread operator
const animals = {
    tiger: 25,
    lion: 5,
    mokey: 2,
    bird: 48
}


function objectSpread(p1, p2, p3) {
    console.log('tiger', p1)
    console.log('lion', p2)
    console.log('rest', p3)
}

const { tiger, lion, ...rest } = animals;
objectSpread(tiger, lion, rest)

