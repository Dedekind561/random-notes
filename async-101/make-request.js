const request = require('../request');

// synchronous way of thinking . . .
// const fetchDogs = () => {
//     const dogs = request('/dogs');
//     return dogs;
// };

// const dogs = fetchDogs();
// const allBreeds = dogs.map(dog => dog.breed);

// asynchronous way of thinking...

const logDogs = (err, dogs) => { console.log(dogs) };
const saveDogs = (err, dogs) => {
    console.log('write a dog file here...')
};

const fetchDogs = (callBack) => {
    request('/dogs', (err, dogs) => {
        if (err) callBack(err);
        else callBack(null, dogs);
    });
};
fetchDogs((err, dogs) => {
    console.log(dogs);
});
doMoreWork();