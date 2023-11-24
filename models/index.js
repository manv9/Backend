const mongoose = require("mongoose");
const uri = "mongodb+srv://tirumalmanav4:ManavTirumal2@cluster0.g8zddvu.mongodb.net/?retryWrites=true&w=majority";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };