/**
 * Created by Taran Dhillon on 2017-01-25.
 */
//
let connect = require('connect');
let app = connect();
let url = require('url');

app.use('/', function (rqst, rsp, next) {

    let qs = url.parse(rqst.url, true).query;

    let method = qs.method;
    let x = qs.x;
    let y = qs.y;
    let answer;

    if (method == 'add') {
        method = '+';
        answer = parseInt(x) + parseInt(y);
    }
    else if (method == 'subtract') {
        method = '-';
        answer = x - y;
    }
    else if (method == 'multiply') {
        method = '*';
        answer = x * y;
    }
    else if (method == 'divide') {
        method = '/';
        answer = x / y;
    }

    rsp.end(x +' ' + method +' ' + y +' = ' + answer);

});

app.listen(3000);
console.log('Server is running on port 3000');
