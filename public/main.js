const socketio = io()
const form = document.getElementByld("form")
const input =document.getElementByld("msg")
const chats =document.getElementByld("chats")

form.addEventListener("submit",function(event){
    socketio.emit("message",input,value)
    input,value=""
    event,preventDefault()
})
socketio.on("message",function(msg){
    const li = document.createElement("li")
    li.append(msg)
    chats.append(li)
})