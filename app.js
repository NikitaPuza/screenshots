var lineReader = require('line-reader');
var webshot = require('webshot');
var sleep = require('thread-sleep');
var mv = require('mv');


var options = {
    windowSize: {
        width:1024,
        height:768
    }
};

var counter = 0;
lineReader.eachLine('urls.txt', function(line, last) {
    var url = (line);
    var oldpath = url + '.jpg';
    var newpath = './captures/' + oldpath;

    sleep(1000);

    webshot(url, newpath, options, function(err){
        console.log('captured ' + newpath);
    });

    sleep(600);

    counter++;
    if(last){
    console.log(counter);
    }
});