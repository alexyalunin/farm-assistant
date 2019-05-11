const express = require("express");
const router = express.Router();
const pool = require("../db.js")


router.get("/", async (req, res) => {
    res.json({
        "type": "success"
    });
});

module.exports = router;