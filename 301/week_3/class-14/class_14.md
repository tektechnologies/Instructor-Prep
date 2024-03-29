# Good Day

## Announcements

## warm-up

- Java

## Final exam review

- Deploy to Netlify
- Deploy to render
- View and see application error
- Then we need to add our environmental variables
- From our server we have the DB_URL
- Reveal config vars
- redeploy our main branch, but does it work?
- build and deploy env variables from the front end.
- REACT_APP_SERVER and our
- don't forget to remove the / at the end.

## Assessment Administration

 spend 30 minutes to prepare students for the assessment.

## Communicate the Ground Rules

- This is a **solo** assessment.
- Online research is expected, and attribution of any utilized resources is required.
- Do NOT communicate with fellow students (or any other people) during the assessment.
- prioritize tasks according to each task's points.

### Time frame

- Students will have 4 hours to complete assessment.
- At the end of the designated time, all code must be committed to the repositories.
- we will agree at on a start time. 5-9

### Permissible Questions to Instructional Team

- Grading criteria questions.
- Help setting up testing environment.
- Double checking that repos are correctly configured.
- Making sure a student grabbed all the files.
- Help extracting the zip file.
- High-level questions regarding test output.

Instructional team will **NOT** debug with students nor provide problem solving guidance.

Emphasize that the intention is not to be be blocked by procedural issues.

If you don't pass first time through, no judgement, we will review the quiz and
you will take it again. What you miss on the exam is what you can focus on going
forward.

## Distribute the Assessment

1. Send the zipped assessment to your students.
1. Ensure students using WSL get the file into the Ubuntu filesystem.
1. Give guidance on how to unzip the file into a good working directory.

## Notes from previous assessments

- Students spent long time getting set up.
- Students hit first bug then totally stuck.
- Lots of confusion with failing test output.
- Especially with React Testing Library.

## Failing the Second Retake

After 3 total attempts, a student unsuccessful in passing the assessment should
not move on to Code 401.

## NOTES

- Some students new newer Apple hardware (M1/M2) may experience issues with
 Mongo Memory Server. This can be solved by having them run this in their
  terminal prior to running their tests:

## Code 301 Final Assessment

This assessment comes in 2 parts (applications), a **client** and a **server**
that together, will allow a user to create a list of items.

Each application is intended to be operated and tested independently, while also
working together.

- The server, written in express, will be the API that the react application uses
 for data retrieval and storage.

## Feature Tasks

- Fix the bugs in the server.
- Fix the bugs in the client.
- Add **DELETE** functionality on both the server and client.
- The client app has a "Delete Button" that is there but not wired up. Wire it
   up.
- Change the styling of the items list.

### The API Server

Located in the `/server` folder, this is an express server designed to perform
CRUD (Create, Read, Update, Delete) operations on a mongo/mongoose data model: `items`.

## Note

- this server does not require you to install or configure MongoDB,
- that will be handled automatically.

> However, this server is broken in other ways. Your task is to fix the bugs
 and add the missing features.

How will you know that you've found them all? The tests will all pass!

### Server: Running the tests

- Make sure the server is **NOT** running.
- From the root directory of the server in the terminal, run the command `npm test`.
- You should receive a list of the tests that are passing and failing just like
 you have seen in your code challenges.

#### Server: Getting Started

- Create an empty **private** repo on GitHub.
- Invite your instructor to the repo.
- Connect it to your server directory:
- run `git init -b main`
- run `git remote add origin <url-of-the-repo-you-just-created>`
- A/C/P

- Install your dependencies.
- Run the tests.
- with the server turned off run the command: `npm test`
- A "bug" is a defect or missing feature. Find the bugs and fix them.
- You will know you have found the bugs when the tests all pass.
- Deploy to Heroku.

#### Server: Notes

- You may inspect the tests, but do not change them.
- Once you have this working, keep it running. The React app will be using it to
  save and retrieve data.
- If you are using an Apple device with the M1 chip and you get an error message
  about the Mongo Memory Server, you may need to run the following commands in
  your terminal shell before attempting to run the final exam server:
    - `export MONGOMS_DOWNLOAD_URL=https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.25.tgz`
    - `export MONGOMS_ARCH=x64`

### The React App

The React application will allow a user to:

- Display current items.
- Add a new item.
- Delete an item from the list.

#### React App: Getting Started

- Create an empty **private** repo on GitHub.
- Invite your instructor to the repo.
- Connect it to your React app directory:
    - run `git init -b main`
    - run `git remote add origin <url-of-the-repo-you-just-created>`
    - A/C/P

- Install your dependencies.
- Run the tests.
    - with the React App turned off run `npm test`
- A "bug" is defect or missing feature. Find the bugs and fix them
    - You will know you have found the bugs when the tests all pass
- Deploy to Netlify

#### React App: Change Styling

- Using React Bootstrap, use `Accordion` for showing the items in the list
  instead of `Table`.
    - Use `Accordion` in expected fashion.
    - Remove `Table` related code.

#### React App Notes

- Throughout the application code, you will see that some components/markup have
 a prop called **data-testid** that look like the below. **Do not remove or change
  these, as they are required for the tests and grading**.
    - ```data-testid="---"```

- When you are running the application and manually testing in the browser,
it'll use your server and will not operate unless it is running.
- However, it's not sufficiently set up at first to reach the API.
    - You'll need to properly configure the app in order to reach the server.
- When you are running the tests with `npm test` the application will simulate
 having a server, so it's not necessary to have your server up while executing
  the tests.

## Submitting this assignment

- Submit the URLs to:
    - GitHub repositories for both your frontend and backend code.
    - URLs to both your deployed frontend and backend applications.

## Rubric

- 100 points total.
- 80 required to pass.

### Back End - 35 Points

- 05 points: server tests other than delete passing.
- 25 points: delete test passing.
- 05 points: deployed to Heroku.

### Front End - 35 Points

- 05 points: tests other than delete passing.
- 25 points: delete test passing.
- 05 points: deploy to Netlify.

### Integration - 5 Points

- 05 points: deployed Applications are properly configured to interoperate fully.

### Styling - 25 Points

- 15 points: functional use of Accordion component.
- 10 points: removal of all Table related elements.

## STRETCH GOALS

No extra points, just the satisfaction of being stretchy.

- Integrate Mongo Atlas so deployed server and client are fully functional.
- Add Auth0
