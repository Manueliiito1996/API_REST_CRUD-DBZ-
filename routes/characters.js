const express = require('express');
const app = express();
const router = express.Router();
const Character = require('../models/Character')

router.get('/', (req, res) => {
    res.send('DRAGON BALL Z FANS PAGE');
});

//Call All Characters
router.get('/characters', async (req, res) => {
    try{
        const characters = await Character.find();
        res.json(characters)
    }catch(err){
        res.json({message:err});
    }
});

//Specific Character  /*
router.get('/characters/:characterId', async (req, res) => {
   try{
    const character = await Character.findById(req.params.characterId);
    res.json(character);
   }catch(err){
    res.json({message: err});
   }
});


//Submit a Character
router.post('/characters', async (req, res) => {
    const character = new Character ({
        name: req.body.name,
        planet: req.body.planet,
        ability: req.body.ability,
        imageUrl: req.body.imageUrl
    })
     try{
        const savedCharacter = character.save();
        res.json(savedCharacter);
     }catch(err) {
        res.json({ message: err})
     }
});


//Delete a Character
router.delete('/characters/:characterId', async (req, res) => {
   try{
    const removeCharacter = await Character.remove({_id: req.params.characterId });
    res.json(removeCharacter);
   }catch(err){
    res.json({message: err});
   }
});

//Update a Character
router.patch('/characters/:characterId', async (req, res) => {
   try{
    const updateCharacter = await Character.updateOne(
        {_id: req.params.characterId },
        {$set: {ability: req.body.ability} }
        );
    res.json(updateCharacter);
   } catch{
    res.json({message: err})
   }
})

app.use("/", router); 

module.exports = { router };