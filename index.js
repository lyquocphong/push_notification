const express = require('express')
const webpush = require('web-push')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());

const publicVapidKey = 'BGjyPYx7UiR5ZpXMYxMxfP4HLO0FfzzFdZIzXfR8DkRWahV2-wNVysPGCoS1jHn-pjPOU4arHXNywnjg0CXtmYM';
const privateVapidKey = '2l9xKaX4ohPUTS4JFHrTaLdKByWC4KLR3XVRMJXykUI';

webpush.setVapidDetails('mailto:lyquocphong@gmail.com', publicVapidKey, privateVapidKey);

// Subscribe Route
app.post('/subcribe', (req, res) => {
    // Get pushSubsription object
    const subscription = req.body

    // Send 201 - resource created
    res.status(201).json({})

    // Create payload
    const payload = JSON.stringify({title: 'Push Test'});

    // Pass object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.log(err));
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))