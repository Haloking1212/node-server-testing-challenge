const express = require('express');
const Runescape = require("./runescapeModel")
const router = express.Router();

router.post('/user', (req, res) => {
    console.log("user",req.body)
  Runescape.insert(req.body)
  .then(runescape => {
    res.status(201).json(runescape)
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({ error: "There was error while saving the comment to the database." })
  })
});

router.delete('/:id', (req, res) => {
  // do your magic!
  Runescape.remove(req.params.id)
  .then(count => {
    if(count > 0){
      return res.status(200).json({ message: "The Post has been deleted" })
    } else {
      return res.status(404).json({ message: "The Post with the specified ID does not exist." })
    }
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({ error: "The Post could not be deleted." })
  })
});

module.exports = router;
