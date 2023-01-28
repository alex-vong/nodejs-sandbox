//need to import core modules to interact with file system

const fs = require("fs");

// reading files -

//apply readFile() method which takes 2 params, 1. rel path, 2. function to run
//function also takes 2 params 1. err, 2. data
//log out err if there is one
//data returns a buffer which is a package of data that is sent when file is read

// console.log('first line');
// fs.readFile('./docs/blog1.txt', (err, data) => { //async so takes time to do but will not stop rest of code
//     if (err) throw err;

//     console.log(data.toString()); //data comes in buffer so can just toString to show string
//   });

// console.log('last line') //this will run first before data above



// writing files

// fs.writeFile('./docs/blog1.txt', 'this is new text written from the writefile method and it updates blog1', () => {
//     console.log('file has been written from writeFile()');
// })

// fs.writeFile('./docs/blog2.txt', 'this created a whole new blog file because the directory in param 1 did not exit so bc of that a new file was made with that path', () => {
//     console.log('file has been written from writeFile()');
// })

//using variables

// const filePath = './docs/blog2.txt';
// const data = 'This method checks to see if there is already this path, if there is, it will replace the contents with whatever this is. If there isn\'t a path then it will create a new directory';

// fs.writeFile(filePath, data, (err) => {
//     if (err) throw err;
//     console.log(`the file ${filePath} has been created and saved`);
// })








//directories

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./images", (err) => {
//     if (err) throw err;

//     console.log("new folder created");
//   });
// } else {
//     fs.rmdir("./images", (err) => {
//         if (err) throw err;
//         console.log('folder was removed')
//     })
// }


// fs.mkdir('./images', { recursive: true }, (err) => { 
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('Directory created successfully!');
//     }
//   });






//deleting files

// if (fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if(err) throw err;
//         console.log('file deleted');

//     })
// } else {
//     console.log('file does not exist');
// }