import express from "express";
import axios from "axios";

const app = express();
const port = 4141;

app.get('/health', (req, res) => {
    console.log('make request TO health');

    res.send({status: 'healthy', timestamp: new Date().toISOString(), service: 'red'}).status(200);
})

app.get('/green-service', (req, res) => {
    console.log('make request TO green-7777-qqqqq');
    
    try {
        axios.get('http://green:9191/health').then((r) => {
            res.send({message: 'response of the green service', result: r.data})
        }).catch(err => {
            console.log('ERR',err);
            
            res.status(500).send(err.message);
        })
    } catch (error) {
        console.log('ERR',error);
        
    }
})

app.listen(port, () => {
    console.log(`Red services is running on port ${port}`);
})