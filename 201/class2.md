# Programming Concepts Covered

## 6pm Announcements - longer today than usual. 
- Introduce the Learning Journal
_ Introduce the 

## 6:15 pm

- Talk about code review, we will look at students code and talk about improvements that can be made. 
### Brain storm why do we do code review, 1 minute, why are we doing this? 
- Maybe write down your answers so that if your called on you can just read your response. (popsicle sticks.)
#### Reasons 
- its a thing developers do
- learning from working code
- learn from new stuff you haven't seen
- learn more from the broken code
- we can learn to prevent mistakes and create best practices. 
- team work. 
- writing code is good, this is a chance to learn how to read code better (which you will do)
- how to debug

## 6:30 pm
- Get a Volunteer to provide code to review have them slack out the link. 
- Approach the code on the screen and open the web page. 
- 1. Run the website, to see what it is doing and if there is someplace in the code that I need to look at. 
- I will be calling on you to help me get this running on my machine, 
#### how do I get inside the code review directory. 

## 6:45 pm 

- still looking at site and going through the code. 
- When we hit cancel we will get a null back, 
- Use white space strategically to put space between items that should be grouped together. 

# 10 minute break ( Means code review should be from 615 to 7:00 - 15ish)
## 7: 30 pm
- Start to talk about css. 
- Look at the same web page in two different browsers. 
- Use the reset css copy and paste into a style tag. And show the differences in the two browsers. 
- Discuss how to give credit to others and document the code that is not yours. 
- Moving styles from the head to css sheet is a change where we dont want to see a change. 
## 8:00 pm
- Ask what are conditionals, what are the important words.  if,else if, break, 

# 10 minute break

## 8:30 pm

Code Fellows example. 

``` section p.more-content {
  background-color: #FF0000;
}

.more-content {
  background-color: #0000FF;
}

#something-else {
  border: 5px dashed #00FF00;
}




var username = prompt('Tell me your name!');
console.log('user\'s name was ' + username);

// conditionals! let us use if, else if, else to run different pieces of code in different scenarios

// if the username is Michelle, show a custom message
// otherwise, for everyone else, show a generic message
var lowerCaseUsername = username.toLowerCase();
if(lowerCaseUsername === 'michelle') {
  alert('welcome back, you cool person ' + username);
} else {
  alert('Welcome to my site!');
}
```