/*
Create several objects m1, m2, ... within dist/script.js with an equal structure that represent chat messages. Each chat message object should have
a textBody, a sender and a type property. The type may have one of the values "user" or "system".

Create constant variable TYPE_USER and TYPE_SYSTEM for the type values, to avoid typos during implementation.
Reference those variables during the creation of the message objects.

Create a function sendMessage, that prints out a chat message to the console using console.log(someString). Format it differently, depending on the type value, e.g. prepending the username for user messages and/or surrounding system messages with three dots. Use if-then-else or switch-case, whatever you like best. Call the function several times to log each chat message to the debugging console.

Remove the sendMessage() calls and use the browser debugging tools instead to call the function. What do you observe regarding the scope of the function and variable declarations?
*/
const TYPE_USER = "user";
const TYPE_SYSTEM = "system";

let m1 = {
    textBody:"Eine message 1",
    sender:"sender1",
    type: TYPE_USER
}
let m2 = {
    textBody:"Eine message 2",
    sender:"sender2",
    type: TYPE_USER
}
let m3 = {
    textBody:"Eine message 3",
    sender:"sender3",
    type: TYPE_SYSTEM
}

console.log("Hooray, my first line of JavaScript!");

let sendMessage = function(m, renderFunction=render) {
    m.render = renderFunction;
    console.log(m);

    console.log(m.render());
}
/**
 * 
Optional: Instead of declaring the message object manually, 
write a function createMessage(sender, text, type) 
that returns corresponding message objects. 
Use an arrow function for the function definition. Use this function when declaring m1, m2, m3, ....

 */
let createMessage = (sender, text, type) =>{
    return {
        textBody:"Eine message 3",
        sender:"sender3",
        type: TYPE_SYSTEM
    };

}

let render = function(){

    if (this.type === TYPE_SYSTEM) {
        return "..." +this.textBody + "...";
    } else {
        return `${this.sender}: ${this.textBody}`
    }

}

sendMessage(m1);
sendMessage(m2);
sendMessage(m3);
