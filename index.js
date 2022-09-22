const { google } = require('googleapis');
const service = google.youtube({
    version: 'v3',
    auth:'AIzaSyA9VLNxanIcvH5X-Y0T6kp7kPuzSHpLVWY'  
})

async function main() {
    const res = await service.videos.list({
        "part": [
            "snippet,contentDetails,statistics"
        ],
        "chart": "mostPopular",
        "videoCategoryId":20
    }, (err, res) => {
        if (err) return console.log('Api Error please ChecKIn...');
        const videos = res.data.items;
        if (videos.length) {
            console.log('VIDEOS : ');
            videos.map((video) => {
                console.log(`${video.snippet.title} (https://www.youtube.com/watch?v=${video.id})`);
            })
        }
        else {
            console.log(Error);
        }
     })
}

main().catch(console.error());