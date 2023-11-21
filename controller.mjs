import 'dotenv/config';
import * as users from './model.mjs';
import express from 'express';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

/**
 * Confirm the username / password exists. 
 * Returns A JSON array containing the entire collection.
 */
app.post('/check-login', (req, res) => {
    const { username, password } = req.body;
    let filter = {username, password};
    users.findUser(filter)
        .then(users => {
            res.send(users);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request failed' });
        });

});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});