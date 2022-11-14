# task-organizer

Backend for task-organizer, a task management solution.

## About

task-organizer is a web browser application with which you can manage all your homework and share with your colleagues.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want

4. Configure the `.env` file using the `.env.example` file

5. open the dump.sql file and run it in your database


6. Run the backend:
  in the terminal, in the root folder of the project run:
```bash
npx nodemon src/app.ts
```

## Routes

GET: /
"list of users already registered"

POST: /
Body: { "name": "username" }
"create new user"

GET: /task
"to-do list already registered"

POST: /task
Body: {
"name": "task name", //string
"userId": id of the user who will be responsible for the task, //number
"date": "2022-11-11", // date
"description": "task description", //string
"done": true|| false // boolean
🇧🇷
"create new task"

PUT: /task/:id
Body:{ "done": true|| false // boolean }
"pass the id of the task that will be updated by req.params and in the body a boolean with the status of the task"

DELETE: /task/:id
"pass the id of the task that will be deleted by req.params"
