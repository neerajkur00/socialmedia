const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGO_URL)
mongoose.connect("mongodb://127.0.0.1:27017/Difference")
.then(() => console.log('DataBase Connected'))
.catch(err => console.log(err))

