let mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://test:test@cluster0-j8mu1.mongodb.net/prueba?retryWrites=true&w=majority`,{ useUnifiedTopology: true,useNewUrlParser: true });

let ClientSchema = new mongoose.Schema({
    'Date Set': {
        type: String,
        required: false
    },
    Lastname: {
        type: String,
        required: true    
    },
    Name:{
        type: String,
        required: true
    },
    "Unique Id":{
        type: String,
        required: true
    },
    'Phone #':{
        type:String,
        required:false
    }
});

module.exports = mongoose.model('clients', ClientSchema);