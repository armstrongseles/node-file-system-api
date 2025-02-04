# Node File System API

This project demonstrates how to create and retrieve text files using Node.js, Express, and the file system module.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with the following content:
    ```
    PORT=3000
    ```
4. Run the server using:
    ```bash
    npx nodemon index.js
    ```

## API Endpoints

### Create a File

- **URL**: `/create-file`
- **Method**: POST
- **Description**: Creates a text file with the current timestamp as content. The filename is the current date-time.txt.
- **Response**:
    ```json
    {
        "message": "File created successfully",
        "filename": "2024-07-16T12-34-56.789Z.txt"
    }
    ```

### Retrieve All Files

- **URL**: `/files`
- **Method**: GET
- **Description**: Retrieves a list of all text files in the 'files' folder.
- **Response**:
    ```json
    {
        "files": ["2024-07-16T12-34-56.789Z.txt"]
    }
    ```

## Testing with Postman

1. Open Postman.
2. Create a new collection and name it `Node File System API`.
3. Add a request to create a file:
    - **Method**: POST
    - **URL**: `http://localhost:3000/create-file`
4. Add a request to retrieve all files:
    - **Method**: GET
    - **URL**: `http://localhost:3000/files`
#   n o d e - f i l e - s y s t e m - a p i  
 