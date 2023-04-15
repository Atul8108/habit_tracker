const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shawatul4:shawatul4@cluster0.doflsji.mongodb.net/habit-tracker?retryWrites=true&w=majority');
const db = mongoose.connection;
// error
db.on('error', console.error.bind(console, 'erroe connecting to db'));
// up and running then message
db.once('open', function () {
    console.log('Success fully connected to the database')
})