/**
 * Variable naming rules : same as java
 * Primitive Data Types
 * numbers : 13 , 13.5 --> bütün sayılar aynı tanımlanır.
 * String : 'Apple', "Apple" --> tek tırnak çift tırnak fark etmiyor..
 * Boolean : true, false
 * Undefined : variable does NOT have a value
 * Null : empty value
 * 
 * There are 3 types of variable
 * var : variable abbreviation 
        - If there is, globally-scope is a variable definition method
        - You can change its value later and define the same variable again.
 * let : is equal to
        - let is a block-scope variable definition method.
        - The structures we call blocks are the place between curly brackets.
        - The value of variables defined with let can be changed later.
        - But you cannot define the same variable again.
        - let bir kere taanımlanır.. sonra değer atanarak değişir var ise tekrar tekrar tanımlanabilir.
 * const : constant abbreviation
        - as soon as the value of the variable is constant, like number Pi
 */

        let a; //undefined
        console.log(typeof a);

        a=6; //number
        console.log(typeof a);
        

        a="Ahmet"; //string
        console.log(typeof a); 

        a='Ahmet'; //string
        console.log(typeof a);

        a=false; //boolean
        console.log(typeof a);

        let b=6, c='Ali';
        console.log(b+c);
        console.log(b*c);  //Nan verir.

        b=10, c=8;
        console.log(b+c);

        var username = 'Mike';
        var age = 35;
        var name_object = {firstName:'Ihsan',lastname:'Akcair'};
        var isMarried = true;
        var skills = ["Selenium","Java",'Cypress'];
        var x=null;

        console.log(username,age)
        console.log(name_object)
        console.log(name_object.firstName)
        console.log(skills)
        console.log(skills[1])
        console.log(x)

        //object
        var student ={
            firstname:"Kate",
            lastname:"Middleton",
            age:30,
            height:175,
            tutition:false,
            fullname:function(){
                return this.firstname+" "+this.lastname
            }
        };

        console.log(student);

        const ageValue=student.age;
        console.log(ageValue);

        //function (metodu yazdıralım)
        console.log(student.fullname());

        const fullName=student.fullname();
        console.log("Fullname "+fullName);


        for(let i2=1;i2<=2;i2++){
            console.log("Hello World")
           
            for(let j=1;j<=2;j++){
                console.log("Merhaba Dünya")
            }
        }

    

        /**
 *  code to run console   (ÖRNEKTİR)
 *  first save your code or choose auto save from File menu
 * 1-The class in which this directory is located is accessed from the terminal.
 * PS C:\Users\Fatih\Desktop\Cy-B7-pr\cypress\e2e> cd javascript_basic
 * 2- Type the full filename with node
 * PS C:\Users\Fatih\Desktop\Cy-B7-pr\cypress\e2e\javascript_basic> node a_datatypes-objects.js
 */
        
        {var number1=8}
        console.log(number1)

        let sayi =5;
        //let sayi=2; //hata verir.

        var sayi1=5;
        var sayi1=14;
        var sayi1=5;  //hata vermez..

        

