class Car{
    constructor(carname,model,year){
        this.carname=carname;
        this.model=model;
        this.year=year;
    }

    carAge(){ //function veya metod
        let date=new Date();
        return date.getFullYear()- this.year;

    }
  
}

var myCar=new Car('Seat','Leon',2005);  //2005'i string olarak da verebiliriz..

console.log(myCar.carname,myCar.model,myCar.year);
console.log("This car age is "+myCar.carAge());
