// Import required modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// Initialize the Express application
const app = express();

// Define the port number for the server
const port = 3000;

// Define the path to the folder where text files will be stored
const folderPath = path.join(__dirname, 'files');

// Middleware to parse JSON requests
app.use(express.json());

/**
 * Endpoint to create a text file with the current timestamp as content.
 * The filename is the current date-time.txt.
 */
app.post('/create-file', (req, res) => {
    // Get the current timestamp
    const timestamp = new Date().toISOString();
    // Replace colons in the timestamp to make it a valid filename
    const filename = `${timestamp.replace(/:/g, '-')}.txt`;
    // Define the full path for the new file
    const filepath = path.join(folderPath, filename);
    
    // Write the timestamp to the new file
    fs.writeFile(filepath, timestamp, (err) => {
        if (err) {
            // Return an error response if file creation fails
            return res.status(500).json({ error: 'Failed to create file' });
        }
        // Return a success response with the filename
        res.status(200).json({ message: 'File created successfully', filename });
    });
});

/**
 * Endpoint to retrieve all text files in the 'files' folder.
 */
app.get('/files', (req, res) => {
    // Read the contents of the folder
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            // Return an error response if reading the folder fails
            return res.status(500).json({ error: 'Failed to retrieve files' });
        }
        // Return a success response with the list of files
        res.status(200).json({ files });
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
