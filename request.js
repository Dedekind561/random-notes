
const https = require('https');

const request = (url, cb = () => { }) => {
    const baseURL = 'https://mini-dog-server.herokuapp.com/api';
    const req = https.get(baseURL + url, (res) => {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            body += chunk;
        });
        res.on('end', () => cb(null, JSON.parse(body)));
    });
    req.on('error', (e) => {
        console.log(e);
    });
    req.end();
};

module.exports = request;