//This works:
let a =function() {
    return b();
}
console.log(a());
function b() {
    return "a";
}

// spread example:
let x= (a, ...as) => {
    return `a: ${a}, as: ${as.length}`;
}
console.log(x());


//m variable will be altered here:
let f = (a) => {
    a.x=12
}

let m = {x:5}

f(m)
console.log(m);