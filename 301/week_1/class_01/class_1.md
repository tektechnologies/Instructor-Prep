# Good Day Happy Monday
**What questions do you have already**
--- 
### Do Introductions for classes that have new students that have not worked together before.

- ## First Hour

# Agenda
- Readings
- Labs  -- Lab 00 and lab 01 will be done this afternoon for tomorrows review. 
- Weekly feed back on Saturdays - Please do not forget. 
- Project groups based on size. We tend to have smaller groups, because larger groups tend to run into issues that we are not going to be going over. We will introduce project management and agile work environment. 
- Standards to move forward are same as 201, requiring 90% to go on. 
# The new schedule
  - **WHY?**
    - Mimics the life of a dev with an offshore team
    - Forces you to re-acclimate with the material the next day
    - Time Management
    - Organization
- In-Class schedule and assignments
  - Career Coaching
  - Readings
    - Done in a reading notes repo instead of canvas
  - Warmups
    - Every language!
  - Code Challenges (and shred talks)
    - Node and Test Driven Development
    - Practice!
  - Lab Assignments
    - New workflows (Trello) on the way
- Grading standards
  - Minimum requirements
  - Take care of your TAs by following instructions
---
### Web Request Response Cycle
- **Why** (2 min)
  - The internet is made up of requests and responses (we will dive more into this later)
- **What** (3 min)
  - We will use the term WRRC.
  - This means Web Request-Response Cycle, which is THE method of communication for web pages, between client and server. 
  - What is live-server? We can see that live-server is lying in wait, to send a response and serving the files, as requested by clients (browsers)
- **How** (10 min)
  - Demonstrate that the browser is making a request, eg: with Bus Mall
  - Sketch out what's happening on a whiteboard
  - Demo this with the network panel
  - Point out the port that is servering the files in the url
---
# Go through the first for labs, and start students out on the day's layout. 
- using smaccs is a good way to begin the layout infrastructure. 
- There are few wrong answers when it comes to what goes where, but there are some best practices that offer rules to using smaccs. 
## we will set up the Data Structures infrastructure
- look to the configs folder to find files for the data structures repos. 

### Work on setting up remote urls for class repo. for the forks that were created. 

---
## Ten Minute Break
## Second Hour
---
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

## How did the smaccs stuff go? 
### SMACSS Modularization

- **Why** (5 min)
  - CSS is structured
  - Rules Cascade
  - Having it all in one file is impossible to scale
  - Having separate modules makes it easy to troubleshoot and extend
- **What** (10 min)
  - Multiple CSS files instead of 1
  - Each file focuses on it's purpose
    - Tags only
    - Components/Modules
    - Layout
    - Color & Style
- **How** (30 min)
  - [SMACSS](http://smacss.com/) Standard
    - `base.css` is for tags only (and generically)
    - `layout.css` informs the physical layout
    - `modules.css` is for standalone components
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
## Third Hour
---

---
# Responsive design enters the picture. 
<!-- 800 x 600 or one other standard size box. so it was easy to desgin for the web.  -->
- now we have to cover many more sizes. 
- We need to do more than say it works on our machines. 
- Newer devices have doubled the pixalation wide and tall, 4x as many as the normal total, dragging from one to the next, what should happen? We dont know. It is no longer a simple matter of size or width. 
- also look at device capabilities for certain apps. does the device have neccessary hardware/software to run the app? 

### Use basic outline to show design type work 
- open the html and smaccs styles 
- show them the developer tool size characteristics. in inspector tool. 


- Pick a break point or two and go with it. 
- CSS standards https://css-tricks.com/snippets/css/media-queries-for-standard-devices/



### Responsive Web Design

- **Why** (5 min)
  - Over 50% of websites are viewed on a phone or tablet
  - Many "apps" are actually just a packaged web browser and special site
  - Users are familiar with their devices
- **What** (10 min)
  - Design mobile first
    - Block element already "Stack" perfectly for the phone
    - Images and Paragraphs are already responsive
  - Fix for desktop
    - `@media` queries!
      - Can't demo these enough.
      - Provide students with a solid cheatsheet.
        - i.e. [Media Query Samples](https://gist.github.com/johncokos/5c6e444ee0fc26aa76679848c25b1690)
    - This is where your `layout.css` gets a workout
  - Notice how your other SMACSS settings are re-usable?
- **How** (30 min)
  - Produce a simple responsive website
    - Header/Main/Footer
    - Main has a section (deck)
    - Desktop: 3 side by side divs
    - Mobile: all stacking up


# Introduce code Challenge
### Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md) to teach the material
  - Since this is the first day of the course, students also need a complete demonstration of the Code Challenge Workflow. 
  - Refer to the [Demo Guide](DEMO.md) for guidance



  

  

