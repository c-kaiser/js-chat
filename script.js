const TYPE_USER = "user";
const TYPE_SYSTEM = "system";


let createMessage = (sender, text, type) => ({
  textBody: text,
  sender,
  type,
  render: render,
});

let sendMessage = function (m) {
  console.log(m);
  console.log(m.render());
};

let render = function () {
  if (this.type === TYPE_SYSTEM) {
    return "..." + this.textBody + "...";
  } else {
    return `${this.sender}: ${this.textBody}`;
  }
};

let messages = [
  createMessage("sender1", "I like pasta", TYPE_USER),
  createMessage("sys","sth went wrong", TYPE_SYSTEM),
  createMessage("sender2", "Nice weather", TYPE_SYSTEM),
  createMessage("sender3", "Cool", TYPE_USER),
  createMessage("sender3", "Das ist eine längere Nachricht", TYPE_USER),
];

// for (const message of messages) {
//     sendMessage(message);
// }
// console.log("forEach...")
// messages.forEach(message => {
//     sendMessage(message);
// });



let chatMembers= new Set(
                messages.filter(m=>m.type===TYPE_USER)
                .map(m=>m.sender)
                );
console.log(chatMembers);

chatMembers.map(member=>(
    `${member}, ${countWords(member)}`
))
let countWords= function(member){
    // return messages.filter(m=>m.sender===)
}