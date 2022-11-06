# To Do Task API

An API created using NodeJS for the User to maintain their daily task .

## Run Locally

Clone the project

```bash
  git clone https://github.com/amitkr24/to-do-api.git
```

Go to the project directory

```bash
  cd to-do-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Documentation

Routes :

    a. /signin - Authenticates and returns the JWT token to be used.
    b. /create-todo - Create New task (JWT Auth enabled).
    c. /update-todo/:id - Allows a user to update their task (JWT Auth enabled).
    d. /todo- List of all the tasks (JWT Auth enabled).
    e. /todo/:id - Delete task. (JWT Auth enabled).

Data that needs to be sent with a route :

    a. /signin - email, password (Form type:x-www-form-urlencoded) [method : GET].
    b. /create-todo - JWT Token (In Authorization ->choose bearer token & enter valid token), title , date (Form type:x-www-form-urlencoded)[method : POST].
    c. /update-todo/:id - JWT Token (In Authorization ->choose bearer token & enter valid token), title , date (Form type:x-www-form-urlencoded)[method : PATCH].
    d. /todo- List of all the tasks (JWT Auth enabled)[method : GET].
    e. /todo/:id - Delete task. (JWT Auth enabled)[method : DELETE].

Folder Structure

    a. index.js - Server runs here
    b. model - Contains all the models .
    c. routes - Contains all the routes.
    d. controller - Contains all the controllers.
    e. config - Contains all the config files.
