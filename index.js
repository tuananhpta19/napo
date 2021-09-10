let express = require('express');
let app = express();
let path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, './views/index.html'))
})
app.get("/cam-on", function(req, res){
    res.sendFile(path.join(__dirname, './views/thank-you.html'))
})
app.get("/san-pham", function(req, res){
    res.sendFile(path.join(__dirname, './views/product.html'))
})


app.listen(3000, function(){
    console.log("đang lắng nghe tại cổng 3000")
})