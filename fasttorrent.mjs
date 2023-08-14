import info from './package.json';
assert(info.type === 'json');
import WebTorrent from 'webtorrent';
import fs from 'fs';
// Create a client
const client = new WebTorrent();

// Set maximum number of connections per torrent
client.maxConns = 500;

// Set download path
const downloadPath = '/Users/teja/Downloads/personal/Untitled';

// Add magnet link to client
const link = 'magnet:?xt=urn:btih:F6156A11AA8594553A63EDCD5AC337D9A667E402&dn=The%20Fast%20and%20the%20Furious%20(2001)%201080p%20BrRip%20x264%20-%201.40GB%20-%20YIFY&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce'

const torrent = client.add(link, { path: downloadPath });

// Start download
console.log(`Downloading: ${torrent}`);
torrent.on('download', function() {
  const progress = (torrent.progress * 100).toFixed(2);
  console.log(`Progress: ${progress}%`);
});

// Save file
torrent.on('done', function() {
  const filePath = `${downloadPath}/${torrent.files[0].name}`;
  const fileStream = torrent.files[0].createReadStream();

  // Create a writable stream to save the file to the desired path
  const writableStream = fs.createWriteStream(filePath);

  // Pipe the read stream to the write stream to save the file
  fileStream.pipe(writableStream);

  writableStream.on('finish', function() {
    console.log(`File saved to: ${filePath}`);
  });
});
