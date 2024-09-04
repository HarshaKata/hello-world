const axios = require('axios');

async function getCombinedMessage() {
    try {
        const helloResponse = await axios.get('http://127.0.0.1:59669/hello'); /* alternatively 'http://localhost:3000/hello' can also be used*/
        const worldResponse = await axios.get('http://127.0.0.1:59692/world'); /* alternatively 'http://localhost:3001/world' can also be used*/
        console.log(`${helloResponse.data} ${worldResponse.data}`);
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
}

getCombinedMessage();
