const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');

if (!ffmpegPath) {
    console.error('ffmpeg-static binary not found!');
    process.exit(1);
}

// Point fluent-ffmpeg to the static binary
ffmpeg.setFfmpegPath(ffmpegPath);

const inputPath = path.join(__dirname, '../public/videos/hero-bg.mp4');
const outputPath = path.join(__dirname, '../public/videos/hero-bg-optimized.mp4');

console.log('Using ffmpeg at:', ffmpegPath);
console.log('Converting:', inputPath);
console.log('To:', outputPath);

ffmpeg(inputPath)
    .outputOptions([
        '-c:v libx264',      // H.264 codec (widely supported)
        '-preset fast',      // Balancing speed and size
        '-crf 28',           // Constant Rate Factor (28 = good compression for background)
        '-an',               // Remove audio (background videos don't need audio)
        '-vf scale=1920:-2', // Resize to 1080p width (maintain aspect ratio)
        '-movflags +faststart' // Optimize for web streaming
    ])
    .on('start', (commandLine) => {
        console.log('Spawned Ffmpeg with command: ' + commandLine);
    })
    .on('progress', (progress) => {
        if (progress.percent) {
            console.log(`Processing: ${Math.floor(progress.percent)}% done`);
        } else {
            console.log('Processing...');
        }
    })
    .on('end', () => {
        console.log('Conversion finished successfully!');
    })
    .on('error', (err) => {
        console.error('Error occurred: ' + err.message);
        process.exit(1);
    })
    .save(outputPath);
