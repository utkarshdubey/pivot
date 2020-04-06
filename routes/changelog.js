const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Load Idea Model
require('../models/Changelog');
const Changelog = mongoose.model('changelogs');

// Idea Index Page
router.get('/', (req, res) => {
    Changelog.find()
        .sort({date: 'desc'})
        .then(changelogs => {
            return res.json({
                status: `✅ fetched ${changelogs.length} records.`,
                statusCode: `ERR_NULL`,
                data: changelogs
            })
        })
});

router.get('/:reference', (req, res) => {
    Changelog.find({reference: req.params.reference})
        .sort({date: 'desc'})
        .then(changelogs => {
            return res.json({
                status: `✅ fetched ${changelogs.length} records.`,
                statusCode: `ERR_NULL`,
                data: changelogs
            })
        })
});

router.get('/delete/:id', (req, res) => {
    if(!req.params.id){
        return res.json({
            status: `❎ incomplete data received `
        })
    }
    Changelog.findOneAndDelete({ _id: req.params.id })
        .then((changelog) => {
            return res.json({
                status: `✅ deleted record`,
                statusCode: `ERR_NULL`,
                data: changelog
            })
        })
});

router.post('/add', (req, res) => {
    if(!req.body.title || !req.body.details || !req.body.author || !req.body.reference){
        return res.json({
            status: '😕 you didn\'t provide the required fields.',
            statusCode: 'ERR_REQUIRED'
        })
    }
    const data = {
        title: req.body.title,
        details: req.body.details,
        reference: req.body.reference,
        category: req.body.category,
        author: req.body.author,
    }
    new Changelog(data)
        .save()
        .then(changelog => {
            return res.json({
                status: '✅ the changelog has been created',
                statusCode: 'ERR_NULL',
                data: changelog
            })
        })

});

module.exports = router;