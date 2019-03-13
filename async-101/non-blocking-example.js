const doMoreWork = () => {
    console.log("doing more working...");
};

function doTask1() {
    console.log('doing task 1...');
};

setTimeout(doTask1, 3000);
doMoreWork();

