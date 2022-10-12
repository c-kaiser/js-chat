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

Message.prototype.renderHtml = function () {
  let liElement = document.createElement("li");
  liElement.textContent = this.textBody;
  return liElement;
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