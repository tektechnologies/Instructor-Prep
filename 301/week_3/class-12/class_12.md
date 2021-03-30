# Good Day Happy Tuesday. 

**You Made It to today DAY 12 What!!?**
--- 

- ## First Hour
### Warm-Up

1. componetization 
2. forms 
3. and mainly passing data around. 
## Lab Notes
-  six feature tasks in today's lab.
-  we are not expecting you to complete every feature task in the time allotted.
-  turn in what they completed during lab time
-  continue to work on any incomplete features  next lab session.
-  There are additional features in lab 13 (updating and deleting records), 
-  lab 14 is a full stretch goal, so you can work remaining features as you choose.

### Code Review
we are going to rebuild yesterdays lab. 
- npm install -S express cors dotenv superagent pg ejs
- Create the views folder. 
- we can run without cors
- with routes we will get the error in an html file. 
- the server is interpreting the path where the file is located
- html is not smart about reading styles.css and it puts the path is the wrong spot 
- easy to fix. 
- int the ejs file with html we nee to take off the dot. the slash stands for absolute root of the server. 
- so it starts at localhost://3000 and it is the same for images. 


- Our server is talked to first, in our WRRC we start on the server 
- we start with the client who makes the request to our local host and the server sends the index.ejs as html. this is our first response. 
- first thing user does, is clicks the link, then opens the searchPage.ejs. 

























---
## Ten Minute Break
- ## Second Hour
---



































---
## Ten Minute Break
- ## Third Hour
---
## Lecture Outline



### Shred Talk




### CRUD Workflow

- **Why** (5 min)
  - Adds dynamism to a website
  - Users expect personalization and functionality
  - This is the way **everything** in computing works, on some level
- **What** (10 min)
  - CRUD Workflow
  - Review CRUD methodology and REST verbs
  - How does the browser transfer data from the user to the server?
  - WRRC now includes a dynamic response, taling with the database, to merged customized into in to the reponse
- **How** (30 min)
- Interactive Drawing of WRRCs: Book App Workflow
  - Get a list
  - Select a Book from the list (edit first)
  - Save the book
  - Retrieve one or all books
- **Experimentation and Discovery Ideas**
  - Allow the students to mob program draw of the features with you.
  - Reminder that this is new functionality, but the tools are those that they already have.

### Modularization

- **Why** (5 min)
  - Having the same functionality in multiple files is hard to manage and maintain
  - Creating small, re-usable features (modules) is scalable
- **What** (10 min)
  - What parts of most websites are the same?
    - Scripts, CSS Files
    - Header and Footer content/images
  - Create common header and footer files
  - When we have a multi-page website, this keeps the look consistent
- **How** (30 min)
  - EJS Partials
    - Using the todo demo built from the previous section
    - Find the areas of commonality
    - Extract those into separate modules/components
      - (header, footer, specifically)
    - Note that there are many ways to achieve this.
- **Experimentation and Discovery Ideas**
  - You can have a master page template that uses a partial for each type of content
  - You can have separate partials for header and footer



## What changed from the previous class?

- Books are now stored in a database. The web server is now client to the database server.
- Students will add a new view for displaying the details of a single book, including the description and ISBN. To do so, they will need an anchor tag and an `href` attribute that points to the book id. For example, `<a href="/books/1">`.

## What might students struggle with today?

- Adapting their `index.ejs` file to include the `href` attribute.
- Students always struggle with the paths for the partials
- They will also struggle understanding how relative paths on the server are not the same as the paths used in the URLs (for styles/scripts) with the partials for rendering.
- Students will need to be mindful about the data types for each column of their table. A common error can occur when students try to add a book description that exceeds the size of their column if they choose a data type like `VARCHAR(255)`.
  - This might become a problem in lab 11; however, it might not arise as an issue until lab 14 when the API search functionality is added.



## Past bugs, issues or surprises...

## General Comments and Notes

**Book App Flow**

![Book App flow](whiteboard-diagrams/book-app-flow.png)
