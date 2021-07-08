const socketio = io();
const form = document.getElementById("form");
const input = document.getElementById("msg");
const chats = document.getElementById("chats");

const nameForm = document.getElementById("nameForm");
const userName = document.getElementById("userName");

let username='';
nameForm.addEventListener('submit', function(event){
  if(userName.value!==''){
    username = userName.value;
    nameForm.style.display ="none";
    form.style.display ="flex";

    socketio.emit('signin');

    const msg = {msg: username + ' さんが参加しました。', name: 'システム'};
    socketio.emit('message', msg);
  }

  event.preventDefault();
})

socketio.on('message',function(msg){
  displayMessage(msg)
})

socketio.on('signin',function(msgs){
  for(let i=0;i<msgs.length;i++){
    const msg = msgs[i]
    displayMessage(msg)
  }
})

function displayMessage(msg){
  const li = document.createElement("li");
  li.append(msg.msg + '(' +msg.name+ ')');
  chats.append(li);
}