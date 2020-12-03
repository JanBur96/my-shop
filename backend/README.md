## Backend for MyLocalShop

This is the backend for the application "MyLocalShop". It's basically "just" a REST API.

## Content

1. Tools
2. Features
3. Folders and Explanation
4. Controller Functions (Detailed)

## Tools

- Node.js
- Express
- MongoDB
- Mongoose
- Third-Party Packages

## Features

- User & Product data
- Seeder with import & delete
- MongoDB (+ Mongoose) Database to store & CRUD data
- Authentication
- Permissions
- API Security

## Folders And Explanation

|   Folder    | Explanation                                                         |
| :---------: | :------------------------------------------------------------------ |
|  \_\_data   | Here is the data for the Seeder stored                              |
|   config    | test                                                                |
| controllers | Responsible for reading/writing data & HTTP Responses               |
| middleware  | The name speaks for itself                                          |
|   models    | Blueprints for our data                                             |
|   routes    | For routing (sends the data to the right controller functions etc.) |
|    utils    | Reusable (utility) functions                                        |
|  seeder.js  | For quickly importing / deleting data to the DB                     |
|  server.js  | The base file                                                       |

</br>

## Controller Functions

### auth.js

- **GET** getMe (user gets his profile)
- **POST** registerUser
- **POST** loginUser
- **PUT** updateDetails
- **PUT** updatePassword
- **DELETE** deleteMe
- sendTokenResponse (helper function)

### products.js

- **GET** getProducts
- **GET** getProduct
- **POST** createProduct
- **PUT** updateProduct
- **PUT** productPhotoUpload
- **DELETE** deleteProduct

### users.js (Admin only)

- **GET** getUsers
- **GET** getUser
- **PUT** updateUser
- **POST** createUser
- **DELETE** deleteUser
