//nodejs post json data
function testPost() {
  var data = {
    a: "1",
    b: "2"
  }
  var request = require("request")
  var http = require("http")
  var querystring = require("querystring")
  const postData = JSON.stringify(data)
  var option = {
    hostname: '10.42.28.43',
    port: 9200,
    path: '/pcba_transaction_*/transaction_all/_search',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  }
  const req = http.request(option, (res) => {
    res.setEncoding('utf8');
    var _data = ''
    res.on('data', (chunk) => {
      _data += chunk
    });
    res.on('end', () => {
      console.log(_data)
    });
  })

  req.write(postData);
  req.end();
}
