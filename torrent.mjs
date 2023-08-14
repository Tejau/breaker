import WebTorrent from 'webtorrent';

// Create a client
const client = new WebTorrent();

// Set download path
const downloadPath = '/Users/teja/Downloads/personal/breaker';

// Add magnet link to client
const link = 'magnet:?xt=urn:btih:55b1d83eb5d8f5ecdc1476cb74930e3aca727271&dn=www.5MovieRulz.nu%20-%20Baby%20(2023)%201080p%20Telugu%20DVDScr%20x264%20MP3%202.8GB.mkv&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fbt2.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=http%3a%2f%2ftracker.renfei.net%3a8080%2fannounce&tr=http%3a%2f%2ftracker.gbitt.info%3a80%2fannounce&tr=udp%3a%2f%2fnew-line.net%3a6969%2fannounce&tr=udp%3a%2f%2faarsen.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.qu.ax%3a6969%2fannounce';
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
