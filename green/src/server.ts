import express from "express";
import axios from "axios";

const app = express();
const port = 9191;

app.get('/health', (req, res) => {
    res.send({status: 'healthy', timestamp: new Date().toISOString(), service: 'green'}).status(200);
})

app.get('/red-service', (req, res) => {
    console.log('FROM green');
    
    axios.get('http://red:4141/health').then((r) => {
        res.send({message: 'response of the green service', result: r.data})
    }).catch(err => {
        res.status(500).send(err.message);
    })
})

app.listen(port, () => {
    console.log(`Green services is running on port ${port}`);
})