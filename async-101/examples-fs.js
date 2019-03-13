const { readFile, readFileSync } = require('fs');

const doMoreWork = () => {
    console.log("doing more working...");
};


// const quote = readFileSync('quote.txt', 'utf8');
// console.log(quote);
// doMoreWork(); // <-- synchronous execution


readFile('./quote-library/quote2.txt', 'utf8', (err, fileContents) => {
    if (err) console.log(err, '<-- err');
    else console.log(fileContents, '<-- fileContents');
});
doMoreWork();

