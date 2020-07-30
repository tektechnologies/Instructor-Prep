# Good Day Happy Friday
**You Made It to Friday Again!!! Hard Week of Content for Sure.**
--- 
## This has been a big week, thumbs up/down how are you feeling about this week.
- No new material just to cover material again in ref to the call stack. There is client and server side code and how is it all happening and visualize that. 
### Look at the Lab. 
[LAB](https://github.com/DeltaVCode/cedarrapids-301d6/tree/master/class-10/lab)
- The task for the lab on Monday would be to use screen shots to grab lines of source code, which part is the life cycle it is in. So which part is the request and response life cycle.

- ## First Hour
### Warm-Up

- **Student Analysis** (7 min)
  - Show or print the [warm-up code](https://github.com/codefellows/code-301-guide/blob/master/curriculum/class-10/warm-up/warm-up.md)
- **Debrief** (5-10 min)
  - Refer to the [Warmup Notes](https://github.com/codefellows/code-301-guide/blob/master/curriculum/class-10/warm-up/NOTES.md)
  - Optionally demo the running code at Repl.it
  [Repl.it](https://repl.it/@tektechnologies/301-class-10-code-review#index.js)

# Code challenge review. 
  [the reducer](https://github.com/codefellows/code-301-guide/tree/master/curriculum/class-09/challenges)

![reducer function](301/week_2/reducefunction.png)
---
## Ten Minute Break
- ## Second Hour
---

---
## Ten Minute Break
- ## Third Hour
---




### Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

### Code Review

> Code Review for today is covered as part of the lecture, where you'll be breaking down the entire City Explorer application to teach the call stack.

### The Call Stack

> We previously introduced the "Event Loop" to students when we talked about promises.

- **Why** (5 min)
  - It's incredibly important for developers to know when and how their code executes
  - Identify and deal with asynchronous paradigms
- **What** (10 min)
  - JS runs code as it encounters it
  - Code runs as soon as it can
  - Async makes this hard
  - Javascript manages this for us in the "Event Loop" using a **Call Stack** and a **Callback Queue**
- **How** (30 min)
  - Take a slightly deeper dive into how JS actually runs the code in a simple app (../demo/call-stack.js)
  - Review the order of operations
  - Using your editor, add a break point at various parts of the code and run your app in "Debug Mode"
    - This gives you the ability to showcase the actual call stack (function calls, anyway, not static lines)
- **Experimentation and Discovery Ideas**
  - Work through an interactive call stack exercise
    - Divide students into groups of 2.
    - As you trace the call stack, students should write the name of the function on a Post-It note and add and remove it from their own version of the call stack in front of them on the table.
    - When a function is removed from the call stack, students should write its return value inside the function that called it, as appropriate.
    Throughout this process, tie the functions to their role in the WRRC and Model View Controller architecture.

## Lab Notes

- In addition to today's core lab requirements, students will be **independently** completing their city explorer back end.
- The lab for this class is very fun and designed to be creative
- Students will use post-its to simulate the actual call stack
- They will also make a giant, colorful WRRC diagram
  - Encourage creativity
  - Colors Help
  - What data goes to and from each request?
