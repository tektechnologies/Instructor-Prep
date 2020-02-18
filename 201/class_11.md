# Programming Concepts Covered



# announcements
Locked out assignments are intentional, to the point that if you have missed it, you should probably be focused on something else, we are not stopping you from reading, but, be aware that readings pertain to the relevent topics of the day, 4 skills in language learning: Hearing, speaking, reading, writing, when we focus on specific material while doing this we learning faster and looking at specifics becomes less arduous. 



# agenda

1. Look at final project requirements. 
2. Final Project Key Elements (In Scope)
    - forms
    - event listeners
    - local storage (3rd Week)
    - chart.js (3rd Week)
    - font awesome

3. Out of Scope. 
    - login (local storage ok) admin view prespective as opposed to client view. 
    - database
    - server 
    - network requests
    - jquery
    - bootstrap
    - 3rd party library's front end tools talk to me first. 
    - Be aware of using CDN's for longevity of your project. 


#### Project Example 
    https://github.com/sajafisher29/Adulting101

# Teams put together by Class 12.

#### Chocolate Pizza Get some copies of the submissions for code review. 
- find a friend and get the papers. 
- which code goes with which site. 
- what would you modify on these sites. 

- One of them has check boxes the other doesn't font types are different. 
- Go through and point out what dont you understand, or if there is another way to do it, or what would work better. Take 10 minutes to read through the code. 
- do a code review, on the code in front of you. 
- If this is your code, then review another's.


- Watch spacing maybe set font size to zero on spaces that html adds into the page. 
- manage your css declarations and keep them to a minimum per selector if possible. 

- Manage mobile view, if it looks good at 960 your fine, in 301 we will talk more about mobile sites and how to structure them. 

## Now lets take a look at a code demo of some audio and video. 
- We know we can embed an image into a page. 
- So we have a prebuilt site, in order to jump right in. 
- Lets look at what this demo does. 
- We have an audio tag with a source with several attributes. 
- Set to be muted by default. auto play not allowed. 
- Video in general should not be auto played, chrome will check for the auto to be off. 
- Controls - adds an attribute to show the menu for users to control the audio. 
- 
- In the console type 

```js 
document.getElementbyId('leaves');
//show the audio tag,  now set to var
var audio = document.getElementById('leaves;');
audio.play();
//plays the audio
// how do we make it stop?
// audio.stop()?
audio.pause()

```


### White board the code suggestions. 
- Demo the change sound button. 
### What do you think this javascript looks like for a button like this. 
- Math.random()?
- set as the volume of the audio element.
- grab the button by id ? 
- probably belongs to a function 
- add an event listener // listen for click event. 

we can add another event listener here that does this. 

randomizer.addEventListener('click',function(){
    console.log('You clicked the volume button.');
})






