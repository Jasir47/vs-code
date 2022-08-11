
let express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/',(requset,response)=>{
    response.sendFile(__dirname+'/index.html');
    console.log('listening to port 3000');
})

app.listen(3000);



 