# Happy Saturday

## Announcements

- no new content to add to our server today.
- if you have not used the vs live share, lets test that today.
- new features to implement in our server through modularization.
- Keith will join us next Saturday. 

## Warm-Up

- Python

```js
let array = [1,2,3,4,5,6,7,8];

let start = 0;
let end = array.length 
console.log(end);
while(end - start > 1){
    mid = start + end;
    console.log(mid);
    if(key == array[mid]){
        mid = array[mid];
    }
    if(key > array[mid]){
        start = mid + 1;
    }
    if(key < array[mid]){
    end = mid -1
    }
}
```

- Object Iterations.

## Code Challenge Review

## Lab Review

## Second Hour

## Refactoring

- Code isn't always poetry
    - You want to integrate new technologies/libraries
    - You get better and learn new things
    - You want to integrate more advanced design patterns
    - So
    - Break large functions into smaller chunks
    - Identify areas for reusable functions
    - Identify common patterns
    - Seek opportunities to extend or abstract functionality

- ## Third Hour

## Promises

- Any time javascript recognizes an event as taking more than instant time, it
- can use a promise to wait for the event to finish before handling it
- A promise is just an object that contains the necessary info to continue
- running code for delayed process
- promises are a javascript thing, not a superagent or jquery or react or axios
- promises fail and succeed We call this resolving and rejecting
- a promise can be directed to a failure or success callback just like we can
- have a try catch with two different options
- the `success` path for promises: this path triggers
- the .then(callback)
- failure triggers another function `.catch`

if we req something it is promising to bring something back which is what async
await is doing for us.

## remind them to be kind to themselves this week we have taken in a lot of info
