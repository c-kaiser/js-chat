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

let f1= function(){
    this.x = 12
    let f2 = () => {
        this.x=13;  
        //this in arrow function will be the same as this in its environment/context 
        //(so here we'll have f1.x)
    }
    f2();
    console.log(this.x);
}
//1st option instead:
let f1a= function(){
    this.x = 12
    let that=this
    let f2 = () => {
        that.x=13;  
    }
    f2();
    console.log(this.x);
}
//2nd option instead:
let f1b= function(){
    this.x = 12
    let f2 = (function(){
        this.x=13;  
    }).bind(this)
    f2();
    console.log(this.x);
}
let o= {};
f.call(o);

//Arrow functions options
let createMessage = (sender, text, type) =>{
    return{
         textBody: text,
         sender,
         type,
         render: render
     }};
let createMessage1 = (sender, text, type) =>{
    return{
         textBody: text,
         sender,
         type,
         render: render
     }};
let createMessage2 = (sender, text, type) =>(
    {
         textBody: text,
         sender,
         type,
         render: render
     });
let someArrowFunction = (sender, text, type) =>{ sender, text, type}; //here no object is created
let someArrowFunction1 = (sender, text, type) => sender, text, type; 
let someArrowFunc= ()=>("sth");
let someArrowFunc1= ()=>"sth";
let someArrowFunc2= ()=>{"sth"};
