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

console.log("Hooray, my first line of JavaScript!");

let createMessage = (sender, text, type) =>{
    return {
        textBody: text,
        sender,
        type
    };
}

let sendMessage = function(m, renderFunction=render) {
    m.render = renderFunction;
    console.log(m);

    console.log(m.render());
}


let render = function(){

    if (this.type === TYPE_SYSTEM) {
        return "..." +this.textBody + "...";
    } else {
        return `${this.sender}: ${this.textBody}`
    }

}

let m1 = createMessage("sender1", "message1", TYPE_USER);
let m2 = createMessage("sender2", "message2", TYPE_SYSTEM);
let m3 = createMessage("sender3", "message3", TYPE_USER);

sendMessage(m1);
sendMessage(m2);
sendMessage(m3);
