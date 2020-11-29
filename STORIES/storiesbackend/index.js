const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
let carsoulData = [
    {
      name: "Prashant",
      img1: "car1",
      img2: "car2",
      img3: "car3",
    },
    {
      name: "Rahul",
      img1: "bird1",
      img2: "bird2",
      img3: "bird3",
    },
    {
      name: "Raman",
      img1: "contact1",
      img2: "contact2",
      img3: "contact3",
    },
    {
      name: "Raga",
      img1: "airplane1",
      img2: "airplane2",
      img3: "airplane3",
    },
    {
      name: "Ronnie",
      img1: "car1",
      img2: "car2",
      img3: "car3",
    },
    {
      name: "Rakesh",
      img1: "hello1",
      img2: "hello2",
      img3: 'hello3',
    },
    {
      name: "Rachet",
      img1: "wall1",
      img2: "wall2",
      img3: "wall3",
    },
    {
      name: "Reiner",
      img1: "contact1",
      img2: "contact2",
      img3: 'contact3',
    },
  ];






app.get("/:name", (req, res) =>{
const name = req.params.name;
for(let i = 0 ; i < carsoulData.length ; i++){
  if(carsoulData[i].name === name){
    res.send(carsoulData[i]);
    return;
  }
}

} )

app.listen(4000);

