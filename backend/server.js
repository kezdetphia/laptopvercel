// MONGO_URI = "mongodb+srv://kezdetphia:Justeminem8.zmz8n7z.mongodb.net/?retryWrites=true&w=majority"
import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 3333;


app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
  res.json({
    name: 'Mar',
    age: 'immortal'
  });
});

app.get("/job", (req, res) => {
  res.json({
    job: 'software engineer',
    salary: '100000USD/Year'
  });
});

app.listen(PORT, () => {
  console.log(`app listening ${PORT}`);
});

// mongoose
//   .connect(MONGO_URI)
//   .then(() => {
//     //App listener, gives feedback if connected to datatabse
//     app.listen(PORT, () => {
//       console.log(`Connected to db and listening on port ${PORT}`);
//     });
//   })
//   //It logs an error to the console if any occurs
//   .catch((error) => {
//     console.log(error);
//   });
