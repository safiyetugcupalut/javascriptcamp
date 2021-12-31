import CustomerComponent from "./customerComponent.js"

console.log("User component yüklendi")

let customerComponent = new CustomerComponent()
customerComponent.load()
customerComponent.add()
console.log(customerComponent.list())