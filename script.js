const byteSize = (str) => {
  // write your code here
	// Create a Blob with the string content and specify the MIME type as plain text
    const blob = new Blob([str], { type: 'text/plain' });

    // Get the size of the Blob in bytes
    const sizeInBytes = blob.size;

    return sizeInBytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
