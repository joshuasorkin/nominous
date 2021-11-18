/*
var http = require('http')  

http.get("http://gutenberg.org/ebooks/3503", function (response) {  
  response.setEncoding('utf8')  
  response.on('data', console.log)  
  response.on('error', console.error)  
})
*/

require('http').get('http://www.gutenberg.org/files/10900/10900-h/10900-h.htm', (res) => {
    res.setEncoding('utf8');
    res.on('data', function (body) {
        console.log(body);
    });
    res.on('error', function (error) {
        console.log(error);
    });
});