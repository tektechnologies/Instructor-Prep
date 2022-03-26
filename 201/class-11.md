# First Hour


# Second Hour

### Take Break 10 Minute


# Third Hour







# announcements
 4 skills in language learning: Hearing, speaking, reading, writing, when we focus on specific material while doing this we learning faster and looking at specifics becomes less arduous. 

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
## Project Example 
    https://github.com/sajafisher29/Adulting101


# Chocolate Pizza Get some copies of the submissions for code review. 
- do a code review, on the classes code.

---
## Now lets take a look at a code demo of some audio and video. 
- We know we can embed an image into a page. 
- So we have a prebuilt site, in order to jump right in. 
- Lets look at what this demo does. 
- We have an audio tag with a source with several attributes. 
- Set to be muted by default. auto play not allowed. 
- Video in general should not be auto played, chrome will check for the auto to be off. 
- Controls - adds an attribute to show the menu for users to control the audio. 

-
# In the console type 

```js 
document.getElementbyId('levees');
//show the audio tag,  now set to var
var audio = document.getElementById('levees');
audio.play();
//plays the audio
// how do we make it stop?
// audio.stop()?
audio.pause()

```
-
### What do you think this javascript looks like for a button like this. 
- Math.random()?
- set as the volume of the audio element.
- grab the button by id ? 
- probably belongs to a function 
- add an event listener // listen for click event. 


# We can add another event listener here that does this. 
```js
randomizer.addEventListener('click',function(){
    console.log('You clicked the volume button.');
});
```

---

# Video 
- works like images and audio 
- make a video and give it a source. 
- can set multiple source formats for the browser so it will find a suitable format to play. 
- Usually from high def to lower res. 
- Same controls attribute, and thusly we get controls. 
- you can use auto play / which chrome will block unless it is muted. 
- we can set a height absolute
- width can be a percentage
- That is most of what our introduction to video and audio will be for now. 
- What questions do you have about audio and video. 
 **Thumbs how do you feel about putting a video into your projects**

 # Start Pizza Vote Tracker
 - Begin with the Lab in Canvas. 
 - Explain the Problem Domain the Bus Mall
 - Show the final solution for the lab today. 
 - click, record, console, 3 new images.
 - once we click through 25 of these it will list out the results. 
 - What questions do you have about this lab? 

 ## in repo
 - Pizza vote. 
 -  no new concepts
 - use the skills you learned in new ways, 
 - take some time to plan out the assignment. 
 - We will start the demo with a wireframe of our pizza 
 - Start with the basic html
 - Start with the grid and basic css 
 - only shows up after 5 clicks
 - script to count 5 clicks 
 - keep track of votes

 ![wireFrame](goatWireFrame.png)

- build out intial scaffolding
- git acp flow. 
- So to start out with I want to add some images to build the initial framework for the page. 
 
# 2. On click show two new pizzas. 

# 3. Keep track of Votes.

# 4. Now I need to pick two random Pizzas to display. 
- Start with a variable
- Time to show these on the page. 
- grab image elements at the top of the page. You can use loop through for event listener and inside the display code.

- need to change to the URL attribute src
- Images now update but it will show duplicates. so lets handle the validation of the demo. 
- keep the same one from showing up and keep from the last one from showing up as well. 
- this handles dups from showing up. most of the time.

- Make sure to build your app from scratch.  
- plan your project. 
- good practice for this week to build things out bit by bit. 
- What questions do you have? 
