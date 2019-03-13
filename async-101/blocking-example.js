const doMoreWork = () => {
    console.log("doing more working...");
};

const blockFor3Seconds = () => {
    let startTime = Date.now();
    while (Date.now() < startTime + 3000) { }
};

blockFor3Seconds();
doMoreWork();