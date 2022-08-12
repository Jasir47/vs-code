
let express = require('express');
const cors = require('cors');
const app = express();



app.get('/',(requset,response)=>{
    response.sendFile(__dirname+'/index.html');
    console.log('listening to port 3000');
})

app.use(cors());
app.listen(3000);



 