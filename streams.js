
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'} ); 
//encoding translate data into human readable code so do not need toStrong()

//write file
const writeStream = fs.createWriteStream('./docs/blog4.txt'); //creates directory to blog4

// readStream.on('data', (chunk) => {

//     console.log(`-------New Chunk------`);
//     console.log(chunk);

//     writeStream.write(`\n NEW CHUNK \n`);
//     writeStream.write(chunk); //takes the chunk of data and writes it into writeStream
// }  //.on is a data event listener listening for a data event

// )

readStream.pipe(writeStream); //does the same thing as lines 12-21

readStream.on('end', () => {
    console.log('the file has been read successfully');
}  //.on is a data event listener listening for a data event
