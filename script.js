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
  createMessage("sender1", "message1", TYPE_USER),
  createMessage("sender2", "message2", TYPE_SYSTEM),
  createMessage("sender3", "message3", TYPE_USER),
];

for (const message of messages) {
    sendMessage(message);
}
console.log("forEach...")
messages.forEach(message => {
    sendMessage(message);
});
