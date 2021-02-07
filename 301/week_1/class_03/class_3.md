# Good Day Happy 3rd lecture Day. 


## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../facilitator/LECTURE-EXAMPLE.md) notes.

### Warm-Up

- **Student Analysis** (5 min)
  - Show or print the [warm-up code](../warm-up/warm-up.md)
- **Debrief** (5-10 min)
  - Refer to the [Warmup Notes](../warm-up/NOTES.md)
  - Optionally demo the running code at Repl.it

### Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
  - Today's code challenge is .sort() which presents the prefect opportunity to introduce ternary statements.
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
  - Once you have completed the demo, point out how much simpler your code can be with the help of a ternary statement.
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

### Code Review

- Students will have attempted their first code challenge following Class 02. Use your code review time to not only review a few of the challenges, but to re-implant the TDD workflow with the class.
  - Every day a new branch
  - Every challenge a new folder
  - TDD
  - Submit a PR for grading
  - Do not merge your code!
- Similarly, the lab for class 02 would have been their first lab working out of a new repository. Review that workflow as well.
  - Every day a new branch
  - Submit a PR for grading
  - Do not merge your code!

### Flexbox

- **Why** (5 min)
  - CSS Float is hard to manage with consistency, reliability, scale
  - (Your demo should demonstrate some of these constraints)
- **What** (10 min)
  - A CSS layout engine that uses flexible boxes to line items (vertically or horizontally) within a container along an axis.
  - Review [css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **How** (30 min)
  - Using a live-coded demo, layout items (divs) within a container
  - Use rows and column layout
    - Demonstrate `flex:1`
    - Demonstrate various ways to justify/align the items along the axes
- **Experimentation and Discovery Ideas**
  - Give students markup and css and let them predict the output
  - Show some grid/designs and prompt students for the correct CSS
  - Take suggestions from the class and build what they ask you to

### Mustache

- **Why** (5 min)
  - Creating markup "on the fly" in either VanillaJS or jQuery is a big task, requiring lots of code.
  - It creates a tight coupling between markup and JS
  - With a "Templating Engine" we can let the markup describe itself and "feed" it data
- **What** (10 min)
  - Mustache is a template system (one of many) that maps objects directly to markup
  - Review [mustache docs](https://github.com/janl/mustache.js)
  - Play [try handlebars](http://tryhandlebarsjs.com/)
    - Note this uses handlebars instead of mustache, but the html+data merging is the same, visually
- **How** (30 min)
  - This is the first time that students have really had to dive into documentation to learn a new concept. Be ready to guide them through this process with stories about how you read documentation to learn new concepts.
    - Spend some time pointing out the important things to look for in the Mustache docs and show them step-by-step how to use the example code in the docs to understand a new concept.
  - Using a live-coded demo show the power of a templating system.
    - Begin with a hand coded jQuery solution that clones/creates markup in a few different ways
    - Refactor it to use the Mustache template system.
      - Your demo should focus BOTH on the notion of templating as well as an approach to refactoring.
- **Experimentation and Discovery Ideas**
  - Move between simple divs into more "normal" things, like lists, cards, etc.
  - Demonstrate the use of the `<template>` tag to create the mustache template in place of the `<script>` tag in the head.
  - Have the students drive a layout with data

## Lab Notes

- Students will need to deal with pairing through git ... be ready to help with some merge conflict and workflow issues.
- This is their first "refactor", so assist them in finding ways to analyze working code and transitioning

## What changed from the previous class?

- Students will use Flexbox instead of floats for styling.
- Students will use Mustache Templates to render their images.
- There is a second set of images in another JSON file.

## What might students struggle with today?

- Reading the documentation
- Sorting the elements
- Detail view
- How to populate unique filters for each page

## Past bugs, issues or surprises...

## General Comments and Notes

- Code reivew might be a great time to tie in the WRRC today. The more you can reinforce this concept and slowly build upon it the better.

![Templating](whiteboard-diagrams/templating.png)

