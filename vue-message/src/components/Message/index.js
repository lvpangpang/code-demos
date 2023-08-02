import Vue from "vue"
import Message from "./index.vue"
// 不使用mesage容器
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
  document.body.appendChild(instance.$el)
  let verticalOffset = options.offset || 20
  instances.forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  instance.verticalOffset = verticalOffset
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
  let index = -1
  let removedHeight
  // 从instances中删除当前实例，并且记录删除实例dom的高度
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      removedHeight = instances[i].$el.offsetHeight
      index = i
      instances.splice(i, 1)
      break
    }
  }
  console.log(index)
  // 判断是否需要处理剩下的实例dom的位置
  if (len <= 1 || index === -1 || index > instances.length - 1) return
  // 对当前被移除实例后面的实例dom位置进行调整
  for (let i = index; i < len - 1; i++) {
    let dom = instances[i].$el
    dom.style["top"] =
      parseInt(dom.style["top"], 10) - removedHeight - 16 + "px"
  }
}

Vue.prototype.$message = message
console.log(Vue.prototype)
