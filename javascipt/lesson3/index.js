const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 3000

app.get('/tocaps',(req, res) => {
    let ip = req.socket.remoteAddress  
    const uppercase= req.query.s.toUpperCase()
   
    console.log(req.query)
    const html=` <!DOCTYPE html>
    <html>
    <body>
    
    <h1>IP: ${ip}</h1>
    <p>${uppercase}</p>
    
    </body>
    </html> `
    return res.send(html)
})

app.post('/tocaps',(req, res) => {
    //idea for simple implementation:
    //use post to alter the s variable provided by the get request
 
    let ip = req.socket.remoteAddress   

    console.log(req.query)
    const uppercase= req.query.s.toUpperCase()
    const finalresult=uppercase + ip
    console.log(`Example app listening on port ${port}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  

