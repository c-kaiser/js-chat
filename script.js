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

class Chat {
  constructor() {
    this.messages = [
      new UserMessage("I like pasta", "sender1"),
      new UserMessage("Cool", "sender2"),
      new UserMessage("Nice weather or not?", "sender2"),
      new SystemMessage("sth went wrong"),
    ];
  }
  get members() {
    return [
      ...new Set(
        this.messages
        .filter((m) => m.type === TYPE_USER)
        .map((m) => m.sender)
      ),
    ];
  }
  countWords(member) {
    return this.messages
      .filter((m) => m.sender === member)
      .map((m) => m.textBody)
      .reduce((wordCount, text) => text.split(" ").length + wordCount, 0);
  }
  get wordsByMember() {
    return this.members().reduce(
      (result, member) => ({
        ...result,
        ...{ [member]: this.countWords(member) },
      }),
      {}
    );
  }
  sendMessage(message) {
    const {sender} = message;
        const isNewMember =
            !(message instanceof SystemMessage) &&
            (this.members.indexOf(sender) === -1);

        if (isNewMember) {
            this.sendMessage(new SystemMessage(`${sender} has entered the chat`))
        }
    this.messages.push(message);
    let ol = document.getElementById("messages");
    ol.appendChild(message.renderHtml());

    this.renderMemberList();
  }
  renderMemberList() {
    const memberListElement = document.querySelector("#members");
    const newChildren = this.members.map(member => {
        const li = document.createElement("li");
        li.textContent = member;
        console.log(member);
        return li;
    });
    memberListElement.replaceChildren(...newChildren);
}
}


window.addEventListener("load", () => {
  let initialMessages = [
    new UserMessage("Hello", "sender3"),
    new UserMessage("Very nice", "sender4"),
    new UserMessage("It's cold outside", "sender3"),
    new SystemMessage("it works again"),
  ];
let chat = new Chat();
for (const message of initialMessages) {
  chat.sendMessage(message);
}
let form = document.querySelector("form");

form.addEventListener("submit",event => {
    event.preventDefault();
    let usernameInput = document.getElementById("username")
    let username= usernameInput.value;
    let messageInput = document.getElementById("message")
    let messageText= messageInput.value;
    let userMessage = new UserMessage(messageText,username);
    chat.sendMessage(userMessage);
    messageText.value = "";
});
});






//console.log(chat.members());
//console.log(chat.wordsByMember);

// console.log("chatMembers: " + chatMembers);
// console.log("wordsByMember: " + JSON.stringify(wordsByMember));
