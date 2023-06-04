const express = require('express');
const app = express();
const port = 5001;

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join('frontend/build')));
  app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'frontend/build','index.html')));
}



app.get('/',async(req,res)=>{
    res.sendFile('./frontend/src/pages/LoginPage.js')
}
)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});

