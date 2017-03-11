console.log("Hello from server.js");


var api_path = 'http://ufc-data-api.ufc.com/api/v1/us/fighters';

function setup() {
	loadJSON(api_path, gotData, 'jsonp');
}

function gotData (data) {
	console.log(data);
    // mmaData = data;
}

function action() {
  if (mmaData) {
    console.log(mmaData.main.first_name);
    console.log(mmaData.main.last_name);
  }
}
