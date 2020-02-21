const express = require("express");
const Runescape = require("./runescape/runescapeModel");
const server = express();
const runescapeRouter = require("./runescape/runescapeRouter")

server.use(express.json());
server.use('/', runescapeRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/runescape", (req, res) => {
  Runescape.getAll()
    .then(runescape => {
      res.status(200).json(runescape);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// router.post('/runescape', (req, res) => {
//   Runescape.insert(req.body)
//   .then(user => {
//     res.status(201).json(user)
//   })
//   .catch(error => {
//     console.log(error)
//     res.status(500).json({ error: "There was error while saving the user to the database." })
//   })
// });

// router.delete('/:id', (req, res) => {
//   // do your magic!
//   Runescape.remove(req.params.id)
//   .then(count => {
//     if(count > 0){
//       return res.status(200).json({ message: "The user has been deleted" })
//     } else {
//       return res.status(404).json({ message: "The user with the specified ID does not exist." })
//     }
//   })
//   .catch(error => {
//     console.log(error)
//     res.status(500).json({ error: "The Post could not be deleted." })
//   })
// });

module.exports = server;
