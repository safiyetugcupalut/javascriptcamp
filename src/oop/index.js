class Customer{
     constructor(id,customerNumber){
        this.id= id;
        this.costumerNumber = customerNumber;
     }
}

let customer = new Customer(1,"12345");
//prototyping
customer.name = "Murat Kurtboğan"
console.log(customer.name)

Customer.bisey = "Bişey"
console.log(customer.bisey)

console.log(customer.customerNumber)


class IndividualCustomer extends Customer{

}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName
    }
}
