const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://marco:Marcorosas1@marco.wynjt.mongodb.net/zapateriadb?retryWrites=true&w=majority")
.then(db=>console.log("Mongodb connected..."))
.catch(err=>console.error(err));