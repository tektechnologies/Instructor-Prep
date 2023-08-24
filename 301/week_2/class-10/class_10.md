# Good Day Happy Friday

## General Comments and Notes

This lab requires some adaptation for a virtual environment. You can still trace
the call stack with students as a group and encourage them to write down the functions
on Post-It notes at home, adding and removing them from the stack as you move through
the code together. Show them how to do it on a whiteboard!

Create two different call stacks - one for the synchronous code and one for the
asynchronous code. Demonstrate how JavaScript will set aside asynchronous code and
continue on. You can have students keep track of what function goes where by writing
down the line numbers next to the function name. Using a different color to designate
a promise is also a good way visually reinforce the concept.

The lab asks students to print their code and work with their partner to draw arrows
to demonstrate how each function is being called. For those in a virtual environment,
the lab guides students to draw directly on top of their code in a shared whiteboard
session.

Examples of a good WRRC is included here. Do NOT share this example with students
but use it as a guide when planning your lesson.

1. Announcements
2. warm - up

```js


'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

app.get('/username', (request, response) => {
  const userInfo = {};

  userInfo.name = request.username;
  userInfo.password = request.password;

  response.send(userInfo);
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));

```

1. solve weather and movies
2. For loop demo.
3. Code out the Cache photo
4. Look at the Lab integrate lab starter code
