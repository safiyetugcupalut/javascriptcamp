let sayi1 = 10;
sayi1 = "Engin Demiroğ"
let student = {id:1, name:"Engin"}
//console.log(student);

function save(puan=10,ogrenci) {
    console.log(ogrenci.name + " : "+ puan)
}
//save(undefined,student);

let students = ["Engin Demiroğ", "Halit Kalaycı", "Engin Toprak","Büşra"]

//console.log(students)

let students2= [student, {id:2, name:"Halit"}, "Ankara", {city: "İstanbul"}]
//console.log(students2)

//rest
//params
//varArgs
let showProducts = function (id,...products){
    console.log(id)
    console.log(products[0])
}

//console.log(typeof showProducts)
//showProducts(10,["Elma", "Armut", "Karpuz"])

//spread-array i ayırmaya yarıyor
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC",..."D",..."EFG","H")

//Destructring
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number){
    console.log(small1)
}

someFunction(populations)

let categori = {id:1, name:"İçecek"}
console.log(categori.id)
console.log(categori["name"])

let{id,name1} = category
console.log(id)
console.log(name1)

//Redux
