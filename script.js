const TYPE_USER = "user";
const TYPE_SYSTEM = "system";

function Message(textBody) {
  this.textBody = textBody;
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

Message.prototype.render = function () {
  return this.textBody;
};

UserMessage.prototype = Object.create(Message.prototype);
UserMessage.prototype.constructor = UserMessage;

SystemMessage.prototype = Object.create(Message.prototype);
SystemMessage.prototype.constructor = SystemMessage;

UserMessage.prototype.render = function () {
  return `${this.sender}: ${this.textBody}`;
};
SystemMessage.prototype.render = function () {
  return "..." + this.textBody + "...";
};

let sendMessage = function (m) {
  console.log(m);
  console.log(m.render());
};

let messages = [
  new UserMessage("I like pasta", "sender1"),
  new UserMessage("Cool", "sender2"),
  new UserMessage("Nice weather or not?", "sender2"),
  new SystemMessage("sth went wrong"),
];

let countWords = function (member) {
  return messages
    .filter((m) => m.sender === member)
    .map((m) => m.textBody)
    .reduce((wordCount, text) => text.split(" ").length + wordCount, 0);
};

let chatMembers = [
  ...new Set(messages.filter((m) => m.type === TYPE_USER).map((m) => m.sender)),
];

const wordsByMember = chatMembers.reduce(
  (result, member) => ({ ...result, ...{ [member]: countWords(member) } }),
  {}
);

for (const message of messages) {
  sendMessage(message);
}

console.log("chatMembers: " + chatMembers);
console.log("wordsByMember: " + JSON.stringify(wordsByMember));
