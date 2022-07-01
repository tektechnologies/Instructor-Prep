# Good Day Happy Friday

## Delete and Update

- **Why** (5 min)
    - Delete and Update complete the CRUD cycle
    - Results in a truly "Full Stack" application
- **What** (10 min)
    - With REST, the WRRC is, in it's essence, an ACTION and a THING: a VERB is
     happening to a NOUN... Today: new verbs!
    - Identify the resource you want to work with
    - Usually by ID
    - Communicate your intent to the server
        - ID, Action to take, and possibly any changed data
- **How** (30 min)
    - The server wants to use REST verbs (GET/POST/PUT/DELETE)
    - The browser can only use GET and POST
    - We need some help to send those Actions down
        - Express has custom middleware called "Method Override" that allows us
          to fudge this.
        - Do a walk through of just the middleware to explain it's operation.
- **Experimentation and Discovery Ideas**

### Demo Build

- Implement Update and Delete in the To Do app, using Method Override
- Note clearly: When we redirect after doing one of these actions,
- we are chaining together 2 WRRCs. Draw it!
