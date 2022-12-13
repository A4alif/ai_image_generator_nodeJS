const express = require('express')
const router = express.Router();

router.post('/imagegenerator', (req, res) => {
    res.status(200).json({
        success: true,
    })
})

module.exports = router;