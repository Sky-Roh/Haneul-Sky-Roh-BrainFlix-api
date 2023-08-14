const express = require('express');
const router = express.Router();
const fs = require('fs');
const {v4: uuidv4} = require('uuid');
const videoPath = './data/videos.json'
const imagePath = '/images/Upload-video-preview.jpg'

const readFile = () => {
    const fileData = fs.readFileSync(videoPath);
    return JSON.parse(fileData);
}

const writeFile = (data) => {
    return fs.writeFileSync(videoPath, JSON.stringify(data));
} 

router.get('/', (req, res) => {
    const videoData = readFile();
    res.json(videoData);
})

router.get('/:id', (req, res) => {
    const videoData = readFile();
    const videoInfo = videoData.find(video => {
        return video.id === req.params.id
    })

    if (! videoInfo) {
        return res.status(404).send('Video not found')
    }
    res.status(200).json(videoInfo)
})

router.delete('/:id', (req, res) => {
    const videoData = readFile();
    const videoId = req.params.id;

    const newData = videoData.filter(video => {
        return video.id !== videoId;
    })
    writeFile(newData);
})

router.post('/', (req, res) => {
    const videos = readFile();

    const newVideos = {
        id: uuidv4(),
        title: req.body.title,
        channel: "Adventures Await",
        image: imagePath,
        description: req.body.description,
        views: "589,273",
        likes: "25,879",
        duration: "9:15",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: 1632965932000,
        comments: [
            {
                id: "2d376e19-5b36-4f70-9979-37c84f1c68fd",
                name: "Evelyn Foster",
                comment: "These ancient ruins hold a kind of magic that's hard to describe. The connection to history is palpable, and your video beautifully captures that essence.",
                likes: 0,
                timestamp: 1633141981000
            }, {
                id: "ff8b982e-0a47-4ef0-af2c-22b01a1d2bc1",
                name: "Nathan Rivera",
                comment: "I can almost imagine the people who once lived here, going about their lives. This is like stepping into a time capsule. Truly mesmerizing.",
                likes: 0,
                timestamp: 1633095276000
            }
        ]
    }

    if (!req.body.title || !req.body.description) {
        res.status(404).json('make sure to fill up')
    }

    videos.push(newVideos);
    writeFile(videos)
    res.status(201).json(newVideos);

})

module.exports = router;
