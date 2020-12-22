const express = require('express');
const router = express.Router();

// Item Model
const itemModels = require('../../models/item');

// Middle Ware
const getItem = async (req, res, next) => {
    let item;
    try {
        item = await itemModels.findById(req.params.id);
        if (item === null) {
            return res.status(404).json({ message: "can't find item" })
        } else if (!item) {
            throw Error ("can't find item");
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.item = item
    next()
}

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', async (req, res) => {
    try {
        // res.json(await itemModels.find().sort({date: -1}));
        const items = await itemModels.find();
        if (!items) throw Error('No items');

        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

    // itemModels.find()
    //     .sort({ date: -1})
    //     .then(items => res.json(items))
});

// @route   GET api/items
// @desc    Get One Item
// @access  Public
router.get('/:id', getItem, (req, res) => {
    res.send(res.item)
});


module.exports = router;
