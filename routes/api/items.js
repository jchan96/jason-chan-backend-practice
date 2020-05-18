const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

//get
router.get("/", (req, res) => {
  Item.find().then(item => {
    res.json(item);
  });
});

//post
router.post("/", (req, res) => {
  const newItem = new Item({
    input0: req.body.input0
  });

  newItem.save().then(item => res.json(item));
});

//delete
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id).then(item =>
    item.remove().then(() => res.json(`${item.input0} IS GONE!`))
  );
});

module.exports = router;
