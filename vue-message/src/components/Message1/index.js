import Vue from "vue"
import Message from "./index.vue"
// 维护一个mesage容器，这样可以不用维护每个message的top
let el = document.querySelector("#message-wrapper")
if (!el) {
  el = document.createElement("div")
  el.className = "message-wrapper"
  el.id = "message-wrapper"
  document.body.append(el)
}

const MessageConstructor = Vue.extend(Message)
let instance
const instances = []
let seed = 1
function message(options) {
  let id = "message_" + seed++
  options.onClose = function () {
    message.close(id)
  }
  instance = new MessageConstructor({
    data: options,
  })
  instance.id = id
  instance.$mount()
  document.querySelector('#message-wrapper').appendChild(instance.$el)
  instance.visible = true
  instances.push(instance)
  return instance
}

["success", "warning", "info", "error"].forEach((type) => {
  message[type] = (options) => {
    if (Object.prototype.toString.call(options) === "[object Object]") {
      return message({
        ...options,
        type,
      })
    }
    return message({
      type,
      message: options,
    })
  }
})

message.close = function (id) {
  let len = instances.length
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      instances.splice(i, 1)
      break
    }
  }
}

Vue.prototype.$message1 = message
