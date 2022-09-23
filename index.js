const { google } = require('googleapis');
const service = google.youtube({
    version: 'v3',

        auth: ''

});

async function main() {
    const res = await service.videos.list({
        "part": [
            "snippet,contentDetails,statistics"
        ],
        "chart": "mostPopular",
        "videoCategoryId": 20,
        "region":'FR'
    }, (err, res) => {
        if (err) return console.log('Api Error please ChecKIn...');
        const videos = res.data.items;
        if (videos.length) {
            console.log('VIDEOS : ');
            videos.map((video) => {
                console.log(`${video.snippet.title} (https://www.youtube.com/watch?v=${video.id})`);
             //   console.log(video.snippet);
            })
        }
        else {
            console.log(Error);
        }
     })
}

main().catch(console.error());