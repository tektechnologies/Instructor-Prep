# Happy Days. 
**You Made It to Wednesday**

--- 
## First Hour

### This is a big topical day 3 things we are going to do today. 
- SQL
- Creating a cache with the data retrieved from the API
- Engineering a solution to be abstracted, DRY, and singular in concerns.

## Lecture Outline
### Warm-Up

- What did we find? 

### Code Review

- What Code Challenge problems do you want to look at. 

# Lecture is Short Today
- So lets start with refactoring what we have done so far
- Start by setting up our Server. 
- We will start with just a basic server.
-
















---
## Ten Minute Break
- ## Second Hour
---
### SQL and Databases

- **Why** (5 min)
  - We need a place to store a **lot** of data
  - Ideally, it shouldn't be OUR machine
  - We need looking it up (and saving it) to be both easy and fast
  - Sometimes, we store data for ourselves (customer lists, product lists, etc)
  - Sometimes, we want to **cache** data for quicker lookups
- **What** (10 min)
  - Relational Databases (postgres, mySQL, Oracle, etc)
  - Tabular, Indexed storage (sorted rows and columns)
  - SQL - Structured Query Language
    - Uses english sentences to "talk" to the database
- **How** (30 min)
  - Data Modeling
    - CREATE TABLE
  - SQL Query Structure
  - Basic Commands (SELECT, INSERT, UPDATE, DELETE)
- **Experimentation and Discovery Ideas**
  - Run student driven queries at the [SQL Playground](https://master.dcesh4541no84.amplifyapp.com/)


---
## Ten Minute Break
- ## Third Hour
---
### Using SQL in Apps
  - 3rd Party Libraries (exist for every major database)
  - ORMs exist to make your code the same no matter which DB you choose
- **How** (30 min)
  - `pg` library for Node
    - `connect()` (when you want to make the connection to the db)
    - `.query()` when you need to manage/query data
- **Experimentation and Discovery Ideas**
  - Redraw the WRRC
  - How has this evolved?

## Lab Notes

- Students will be writing a file called `schema.sql`
- execute syntax: `psql -d <database-name> -f <filename>`.
- For example, `psql -d city_explorer -f schema.sql`
- Create a **cache** of data retrieved from the location API, stored in SQL. 





### Shred Talk