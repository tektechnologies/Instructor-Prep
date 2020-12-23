# Good Day Happy Monday
**What questions do you have already**
--- 

- ## First Hour

# Agenda
- Readings
- Labs  -- Lab 00 and lab 01 will be done this afternoon for tomorrows review. 
- Weekly feed back on Saturdays - Please do not forget. 
- Project groups based on size. We tend to have smaller groups, because larger groups tend to run into issues that we are not going to be going over. We will introduce project management and agile work environment. 
- Standards to move forward are same as 201, requiring 90% to go on. 

### Variables 
- Note the const declaration binds a name with a value not allowing you to replace the declaration, but you can add to the object or array. 
If you try you will get a Uncought TypeError: Assignment to constant variable.
- let for the loops and const for everything else. 
so lets not use VAR keyword anymore. 



### Arrow functions and syntax for interpolated strings. 
```js
    // These are expression bodied functions 
    //(in here) are list of arguments  
 let f1 = () => 'hi';
 let f2 = (name) => 'hi, $`{name}`;
 let e2 = function(name){
     return `hi ${name}`;
 } 


 let add = (a,b) => a + b;
 //if there is only one parameter you do not need ()
// one single expression when called with the function
let abs = a => Math.abs(a);
let abs2 = a => {
    let res = Math.abs(a);
    return res;
}
//if it needs more than one line then you can use the {}.
 //This syntax is cleaner than the standard function set up. Same thing happening, sometimes folks forget to add return, so keep in mind that you may be missing a return in a normal function body, use the arrow function as a way to get practice. 

[1,2,3].map(n => n *2);

//Jquery does not make use of arrow functions, because jquery uses the contextual "this"

let carCustomer ={

    name: 'bob',
    cars: ['Datsun 210','76 Cutlass Supreme'],
    listCars: function(){
        //this = carCustomer = bob 
       
       //Last example.  with this. 
        // you can set to another work around.
        var that = this;
        //and then in the function use the 'that' variable
        //devs are like f 'this' but I dont know what this is there is a binding challenge.
        // call bind and apply are ways to change this in a function but arrow function will ignore those as well. 

        //this.cars.forEach(function (car){
        this.cars.forEach((car) => {
            //OR 2 pass the this in here. above. in making an arrow function. 
            //this should still be bob, but it is bound to another : the global object.
            //two ways around 
            //consol.log(that);
            console.log(this);//global object...
            console.log(`${this.name}'s car: `)
            console.log(car);
            //1 pass this into the forEach...
            //this is a workaround  
         })
        // }, this)
    }
}


carCustomer.listCars();
//if you are experiencing something weird it might be because of THIS

```
- relativly few situations where you have to deal with binding, we use them because they are syntactically nicer. this in not getting assigned to what you want to make because of the arrow functions providing that weird behavior. 
- if you use this in jQuery you will get back not what you expect. 
---

### How did the smaccs stuff go? 
 - When looking at styles, our modules sometimes are site wide with list styles, and in other modules like the main you may have lists with unique styles separate from the templated layout. 

https://tachyons.io/

- .gitignore, will allow you to avoid uploading node modules on github, we will let the other devs go out and download those files. 
- git does not care about directories, only files. 

#### Did anyone have any trouble downloading npm stuff? 
- chocolatey is homebrew for windows. 
https://chocolatey.org/
- made by one of Keiths friend.
- ESlint in 201. may identify bugs by using static analysis to see if it works, as opposed to actually running your code. which is dynamic analysis which will generate the errors when run. It is the defacto linter for JS. 
# scaffolding file break down. 
### eslintrc.json
- config file eslintrc.json says this is how we should alway format our js. 
### package.json
- Package.json   https://www.json.org/json-en.html
- look at this in code challenge too. 

---
## Ten Minute Break
## Second Hour
---




---

## Ten Minute Break
## Third Hour
---