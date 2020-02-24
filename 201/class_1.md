# Programming Concepts Covered


- We did introductions and looked at a single page, index.html that was submiited by way of a Gist. 

## Anouncements
Refer to the `lecture.md` for lecture details.

1. Campus Kickoff
    ## Aaron Talks and Welcomes Students
   * Rules/Policies of the Campus
#### If you haven't already, go around and do quick student intros:
- Name
- What brought them to the school
- Background before coming to the school
- Interesting/geeky/quirky fact about yourself


1. Intro to Canvas
   * Show them around the tool and how to find and submit assignments
#### Introduce Canvas to the students. Show them the following:

- Modules view of assignments
- Syllabus
- Course Overview
- Calender view

# Review of Career Coaching Assignments

1. Reading Review
   * Quick overview on how to "skim" readings
#### 10 Minutes on how to do true / false 


1. Configure VSCode
   * setup tabSize, Indentation, and WordWrap settings
   In settings:
- editor.tabSize = 2
- editor.detectIndentation = true
- editor.wordWrap = on

## Setup your Linter
1. Command Line Basics
   * Go over basic commands (see cheat sheet)

- **pwd**
- **Filepaths and up/down navigation concepts**
- **tree**
- **ls, ls -la**
- **cd, mkdir**
- **touch, code**
- **mv, rm, cp**

### Intro to Git & GitHub

- What is Git?
- Version control concepts, show an example of a 201 final project repo and, at a high level, point out commits, branches, network graph
Point out the benefits of keeping their code organized
- Analogy of saving multiple versions of a term paper vs. overwriting changes with each save
Series of snapshots HEAD

1. Code Demo ([Overview Outline](DEMO.md))
   * prompts
   * alerts
   * console.log
   * in-line styles
   * internal styles

## (11 - 12) One Hour - Lab Demo 

### Talk about html abd css basics. 
### Talk about two places where we can write our css. 


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
       var firstName = prompt('What\'s is your First Name?');
       console.log('First Name = ' + firstName);
       var lastName = prompt('What\'s is your Last Name?');
       console.log('Last Name = ' + lastName);
       var gameName = prompt('What\'s is your Favorite Game?');
       console.log('Favorite Game = ' + gameName);
       var systemName = prompt('What\'s is your Game Console?');
       alert('Welcome ' + firstName + ' ' + lastName + ', ' + 'I too play, ' + gameName + ' on a  ' + systemName);
       </script>
       ```
       
    </body>
 </html>
 
 ```


 1. Lab Prep
   * Show them how to submit their lab
