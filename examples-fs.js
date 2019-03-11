const { readFile, unlink } = require('fs');

// const quote = readFileSync('quote.txt', 'utf8');
// console.log(quote);
// doMoreWork();



// readFile('quote.txt', 'utf8', (err, fileContents) => {
//     if (err) console.log(err, '<-- err');
//     else console.log(fileContents, '<-- fileContents');
// });
// doMoreWork();

// readFile 
// then delete it
// readFile('script.txt', 'utf8', (err, fileContents) => {
//     if (err) throw err;
//     else console.log(fileContents);
// });
// unlink('script.txt', (err) => {
//     if (err) throw err;
//     console.log('file deleted...');
// });