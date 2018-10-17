const fs = require('fs');
const crypt = require('crypto');

const stream = fs.createWriteStream("original_targeting.tsv");

stream.once('open', function(fd) {
	length = process.argv[2];
	console.log(length)
	for (let i = 0; i < length; i++) {
    stream.write(makeLine());
	}
  stream.end();
});

function makeLine(){
	return makeAdId() + "	" + getRandomInt(5, 1) + "\n";
}

function makeAdId(){
	return getRandomHex(8) + "-" + getRandomHex(4) + "-" + getRandomHex(4) + "-" + getRandomHex(4) + "-" + getRandomHex(12);
}

function getRandomInt(max, min) {
  return Math.floor(Math.random() * Math.floor(max - min + 1) + min);
}

function getRandomHex(length){
	return crypt.randomBytes(length/2).toString('hex');
}
