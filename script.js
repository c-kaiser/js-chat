const TYPE_USER = "user";
const TYPE_SYSTEM = "system";

function Message(textBody) {
  this.textBody = textBody;
  this.render = () => this.textBody;
}
function SystemMessage(textBody) {
  Message.call(this, textBody);

  this.type = TYPE_SYSTEM;
}
function UserMessage(textBody, sender) {
  Message.call(this, textBody);
  this.sender = sender;
  this.type = TYPE_USER;
}

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
  new UserMessage("I like pasta", "sender1"),
  new UserMessage("Cool", "sender2"),
  new UserMessage("Nice weather or not?", "sender2"),
  new SystemMessage("sth went wrong"),
];

for (const message of messages) {
  sendMessage(message);
}

let countWords = function (member) {
  return messages
    .filter((m) => m.sender === member)
    .map((m) => m.textBody)
    .reduce((wordCount, text) => text.split(" ").length + wordCount, 0);
};

let chatMembers = [
  ...new Set(messages.filter((m) => m.type === TYPE_USER).map((m) => m.sender)),
];

console.log(chatMembers);

const wordsByMember = chatMembers.reduce(
  (result, member) => ({ ...result, ...{ [member]: countWords(member) } }),
  {}
);

console.log(wordsByMember);
