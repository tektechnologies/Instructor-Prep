# Class 01

## First Hour

## Campus Kickoff

Work with your campus director for the Class 1 kickoff, using the [201 orientation slide deck](https://docs.google.com/presentation/d/10z8h0kdeHRtuBZ0RoJ1JWxSpiFKgyeMNyDoz1V4TtRU/edit#slide=id.gf7316a0f20_0_0).

## Intro to Canvas

1. Module-view of assignments
1. Syllabus
1. Course Overview
1. Calendar view

### Review of Career Coaching Assignments

Students should have completed some prework assignments related to Career Coaching.

Discuss the value of focusing on each of these, even though it is early in their career change process.

- Career Coaching Overview: Sets the tone of the career assignments.
- Professional Competency Self-Assessment:
- Prepare your Resume:
- Prepare your LinkedIn:
- Identify Your Accountability Partners:
- Partner Power Hour Reports:
- Talk to Your Network:
- Attend a Meetup:
- Behavioral Interview Questions: Students will use the S.T.A.R method to write drafts of two behavioral interview questions.

## Reading Review

Let students know that they will see `var` used in place of `let` in their readings. That is an artifact of the progressing nature of code. What was best practice when the book was written has evolved and we will be teaching `let` and `const`, because they are more suited to writing clean code.

---

## Break - 10 Minutes

---

## Second Hour

## Command Line, VS Code & Linter Setup

### Command Line Basics

Review the basic Unix Commands:

- `pwd`
- Filepaths and up/down navigation concepts
- `tree`
- `ls`, `ls -la`
- `cd`, `mkdir`
- `touch`, `code`
- `mv`, `rm`, `cp`

---

### Intro to Git & GitHub

Git Intro:

- What is Git?
- Version control concepts; Show an example of a 201 final project repo and, at a high level, point out commits, branches, network graph
  - Point out the benefits of keeping their code organized
- Analogy of saving multiple versions of a term paper vs. overwriting changes with each save
- Series of snapshots
- HEAD

---

### Configure VS Code

In settings:
- editor.tabSize = 2
- editor.detectIndentation = true
- editor.wordWrap = on

### Setup your Linter

- This file should exist in **every** project you create in javascript, so save it somewhere that is easily accessible.
- Have the students copy/paste that code into the `.eslintrc.json` file that they created

  - Students will need to restart VSCode for the changes to take effect.
  - Once they do, guide them through entering `code lint-test.js` at the command line and then paste the contents of the JS sample that you send to them through Slack.

---

## Break - 10 Minutes

---

## Third Hour

### Live Code Demo

1. The code demo should be written completely from scratch in front of the class.
2. After lecture, push your code demo to the class repo and inform students that these demos will be available for their reference each day.

3. Introduce `let`.
Cover the difference between `var` and `let`.
We will be using only `let` and `const` in 201.

Demonstrate how to use the `live-server` command to enable automatic browser refreshing.

4. Code Demo
   * prompts
   * alerts
   * console.log
   * in-line styles
   * internal styles


```html
<html>
   <head>
      <title>Day One</title>
      <link rel="stylesheet" type="text/css" href="mainStyles.css">
      <style>
         a{color:rgb(71, 9, 33);}
         div{height:500px;
         width: 500px;
         background-color: blueviolet;}
      </style>
      <!--this is a commmmmment...-->
   </head>
   <header>
      <h1>This is a top level heading.</h1>
      <h2>This is a an h2 title</h2>
      <nav>
         <ul>
            <li><a href="https://www.google.com">Home</a></li>
         </ul>
      </nav>
   </header>
   <body>
      <section>
         <div>
         </div>
      </section>
      <footer>
         <p><strong>This</strong> is a Paragraph</p>
      </footer>
      ```js
      <script>
         var firstName = prompt('What\'s your First Name?');
         console.log('First Name = ' + firstName);
         var lastName = prompt('What\'s your Last Name?');
         console.log('Last Name = ' + lastName);
         var gameName = prompt('What\'s your Favorite Game?');
         console.log('Favorite Game = ' + gameName);
         var systemName = prompt('What is your Game Console?');
         alert('Welcome ' + firstName + ' ' + lastName + ', ' + 'I too play ' + gameName + ' on a  ' + systemName);
      </script>
      ```
   </body>
</html>

 ```

---

### Lab Setup

1. To finish the day, go over the lab assignment and show students how to find/read the assignment.
2. Complete the assignment as a code demo, and submit the assignment, submitted in a GitHub Gist.











#### Move from class 13
# What does .gitignore do? 
- You can avoid accidently commiting those file that you do not want to commit to git hub. Like the ds_store file that macs create and will include to push if you do not have the ingore file. Which will be even more important in 301. 
- You can create certain setting in VS code that are project specific. 
- look at the git ignore and show the files that you do not want to commit. 
- What questions do you have about git ignore. 
- show the link to the gitignore. link URL
- You DO want to push the git ignore to github so that other people can get the same project settings for is needed to run the application correctly. 

# Open up the console. 
- I usually open the console when I am working in javascipt so that I can see the console logs I work through some code. 
- If I am working css I like to use a second monitor where I can see a full display and have a screen with two windows with one screen with css code and the dev tools with the elements window open to trouble shoot the present.