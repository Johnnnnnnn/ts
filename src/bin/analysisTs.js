const BitView = require('bit-buffer')
const byte = require('bitwise/byte')
const fs = require('fs');
const path = require('path')

const file_path = path.resolve(__dirname, '../../test.ts')
// console.log(5 << 31 >>> 31)
let rs = fs.createReadStream(file_path)
rs.on('readable', () => {
	let chunk;
	while (null !== (chunk = rs.read(1))) {
		if(chunk[0] == 0x47) // 0x47 is Packet Sync byte of transport stream
		{	
			chunk = rs.read(2) 

 			
 			console.log(typeof byte)
 			break;
		}		
	}
});
rs.on('end', () => {
	console.log('end');
});
// fs.open(file_path, 'r', function(status, fd) {
//     if (status) {
//         console.log(status.message);
//         return;
//     }

//     var buffer = Buffer.alloc(100);
//     fs.read(fd, buffer, 0, 100, 0, function(err, num) {
//         console.log(buffer);
//     });
// });