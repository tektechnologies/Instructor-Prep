# First Hour










### Take Break 10 Minute
# Second Hour













### Take Break 10 Minute
# Third Hour



## 9:00 
- Announcements, student questions as needed. 
- Introduce the Career assignments for the first week that students will be working on. 
- What does use strict do?
## 9:15
- Prompt Cancel returns a null value and Alert returns an undefined
- Collective ownership, we share in the responsibility of each others success
- Inside the document we have head and we have a body and that's it. 
- Explain the control flow, in general means the how to program decides which code to run. 
- Ask question, make choice, should we take or not. Then if we do, how do we handle the question and response. So we control to flow of our program. 
- What kinds of control flow are there? 
- Condition comments for control flow, we say show this code or not, on Internet Explorer. 
- Banner of Doom (Change your browser, to something not IE, )

## 10:00
### Demo Control Flow 
- Control Flow in JS
- if (condition){....}
- if (condition){....} else {....}
- if (condition){....} else if (condition2) {....} and so on...
- - if (condition){....} else if (condition2) {....} else {....}

- While is a loop that runs until condition is not truthy. 

while(condition){..Condition has to change..} for the while loop to stop.
for(setup; condition; change Variable)
- for loop is another way to control flow of script
- 3 statements, 1. set up 2 check the variable 3. update the variable. 
```
for(var i = 0; i < value; i ++)

var names = ['Keith','Kevin'];

for(var i = 0; i < names.length; i++){
    console.log(names[i]);
}
```
do {.....} while (condition);
- do while runs atleast once and is the only time when you will see a semi colon after a condition()
####  Falsey Values
- 0
- null
- Nan
- ''
- undefined
- false
- 0n is another way to write 0 with big Int. 
Truthy Values
- Everything else, nill is null in other languages. 
- Bobby Tables. xkcd website. 

## Combining conditions 
- Not: !
- !5 = false
- !0 = true
- !null = true
- !Nan = true
- !!NaN = false 

- AND &&   all have to be true, it returns a truthy or falsy value, it assigns the falsy value to prove the In js, we can chain things together and we can short circuit things. 

- OR || One or the other has to be true. 



- Short Circuiting 
- If we know the answer from the first expression, then dont evaluate the second expression 
## 11:00

Comparison Operators. 
- + , -, *, /, %
- <, >, >=, <=, !=

- Is five less than true? False
- 0 < true = true 
- true < null = false
1  < true = false
1 > true = false
5 < "6" = true
'12' < 5 = false === Coercion 
5 < NaN = false .

- == Kinda equals
- != Kinda not equals
- !== strictly not equals
- === strictly equals. 

- Any thing you write as a for loop, you can write as a while loop. 
```
for(var i = 0; i < value; i++){....}

var i = 0;
while(i < value){
    //code here
    i++
}
```
## 11:15

Switch statements use strict comparisons of values. 
default is anything that was not matched by any other cases. 
- switches do not make use of if statements in nested examples.
switch statement fall through. when a case may have cases' 
## 11:30
- The only way to get better at programming is to practice. 


## 12:00
- Cant put a top and bottom margin on inline elements. 
- If we want to display margin on top we will use display-inline block, which adds the margin all around. 




