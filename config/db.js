const mongoose=require('mongoose')

MONGOURI="mongodb://localhost:27017/TrainingProjectDb"
const InitiateMongoServer = async () => {
    try {
      await mongoose.connect(MONGOURI, {
        useNewUrlParser: true
      });
      console.log("Connected to DB !!");
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  
  module.exports = InitiateMongoServer;
  