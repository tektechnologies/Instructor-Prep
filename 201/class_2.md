# Programming Concepts Covered
# Announcements

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

# 10 Minutes
1. Introduce
   - Learning Journals
   - Quizzes
# 40 Minutes
2. Code Review
    - Why is it important?
    - Code Review options:
      - Look at code and practice reading code
      - Go through code line-by-line and have a different person explain each line
      - Fix broken code together as a class.

**Break 10 Minutes**

# 30 Minutes
3. Review of HTML/CSS
   - HTML/CSS
   - Start to talk about css. 
   - Look at the same web page in two different browsers. 
   - Use the reset css copy and paste into a style tag. And show the differences in the two browsers. 
     - HTML heading/paragraph tags
     - HTML lists (`<ol>` & `<ul>`)
     - CSS ids/classes
     - targeting specific values
     - CSS reset

# 40 Minutes
4. JavaScript
   - Data Types
   **Break 10 Minutes**
   - Conditionals
   - Arrays

# 30 Minutes. 
5. Git vs GitHub
   - git demo
6. Lab Review















- Discuss how to give credit to others and document the code that is not yours. 
- Moving styles from the head to css sheet is a change where we dont want to see a change. 



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