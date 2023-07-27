import WebTorrent from 'webtorrent';

// Create a client
const client = new WebTorrent();

// Set download path
const downloadPath = '/Users/teja/Downloads/personal/breaker';

// Add magnet link to client
const link = 'magnet:?xt=urn:btih:D8DFF499223623F202905994C930FE374B932039&dn=The+Kerala+Story+%282023%29+1080p+Hindi+HDTS+2GB+x264+AAC+-+QRips&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce';
const torrent = client.add(link, { path: downloadPath });

// Start download
console.log(`Downloading: ${torrent.name}`);
torrent.on('download', function() {
  const progress = (torrent.progress * 100).toFixed(2);
  console.log(`Progress: ${progress}%`);
});

// Save file
torrent.on('done', function() {
  const filePath = `${downloadPath}/${torrent.files[0].path}`;
  torrent.files[0].moveTo(filePath, function() {
    console.log(`File saved to: ${filePath}`);
  });
});
