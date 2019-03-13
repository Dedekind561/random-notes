const doMoreWork = () => {
    console.log("doing more working...");
};

const doTask1 = () => {
    console.log('doing task 1...');
};

setTimeout(doTask1, 0);
doMoreWork();
