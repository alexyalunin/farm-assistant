const express = require("express");
const router = express.Router();
const pool = require("../db.js")
const path = require('path');

router.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname+'/App/index.html'));
});
router.get("/runtime.js", async (req, res) => {
    res.sendFile(path.join(__dirname+'/App/runtime.js'));
});
router.get("/polyfills.js", async (req, res) => {
    res.sendFile(path.join(__dirname+'/App/polyfills.js'));
});
router.get("/styles.js", async (req, res) => {
    res.sendFile(path.join(__dirname+'/App/styles.js'));
});
router.get("/vendor.js", async (req, res) => {
    res.sendFile(path.join(__dirname+'/App/vendor.js'));
});
router.get("/main.js", async (req, res) => {
    res.sendFile(path.join(__dirname+'/App/main.js'));
});

router.get("/getDrugs", async (req, res, next) => {
    try {
        var resp = await pool.query('SELECT * FROM drugs ORDER BY id_drug ASC')
        console.log(resp.rows);
        res.json({
            "drugs": resp.rows
        });
    } catch (err) {
        next(err);
    }
});

router.get("/getDrug/:id", async (req, res, next) => {
    var id = Number(req.params.id);
    try {
        var resp = await pool.query(`SELECT * FROM drugs WHERE id_drug=${id}`)
        console.log(resp.rows[0]);
        res.json(resp.rows[0]);
    } catch (err) {
        next(err);
    }
});

router.get("/getDiseases", async (req, res, next) => {
    try {
        var resp = await pool.query('SELECT * FROM diseases ORDER BY id_disease ASC')
        console.log(resp.rows);
        res.json({
            "diseases": resp.rows
        });
    } catch (err) {
        next(err);
    }
});

router.get("/getDisease/:id", async (req, res, next) => {
    var id = Number(req.params.id);
    try {
        var resp = await pool.query(`SELECT * FROM diseases WHERE id_disease=${id}`)
        console.log(resp.rows[0]);
        res.json(resp.rows[0]);
    } catch (err) {
        next(err);
    }
});

router.post("/createDrug", async (req, res, next) => {
    try {
        const {name, pharmacodynamics, indications, min_age, during_pregnancy, during_lactation, 
            during_old_age, contraindications, side_effects, interactions, dosing, storage_conditions, sales_rules} = req.body

        var result = await pool.query(`insert into drugs
        (name, pharmacodynamics, indications, min_age, during_pregnancy, during_lactation, 
            during_old_age, contraindications, side_effects, interactions, dosing, storage_conditions, sales_rules) 
            values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id_drug`, [name, pharmacodynamics, indications, min_age, during_pregnancy, during_lactation, 
                during_old_age, contraindications, side_effects, interactions, dosing, storage_conditions, sales_rules])
        
        console.log(result.rows[0].id_drug);
        res.status(201).send(`drug added with ID: ${result.rows[0].id_drug}`)
    } catch (err) {
        next(err);
    }
});

router.post("/createDisease", async (req, res, next) => {
    try {
        const {name} = req.body

        var result = await pool.query(`insert into diseases(name) values ($1) RETURNING id_disease`, [name])
        
        console.log(result.rows[0].id_disease);
        res.status(201).send(`disease added with ID: ${result.rows[0].id_disease}`)
    } catch (err) {
        next(err);
    }
});

router.put("/updateDrug", async (req, res, next) => {
    try {
        const id_drug = Number(req.body.id_drug)
        req.checkBody('id_drug', 'id_drug is required').notEmpty();
        var errors = req.validationErrors();
        if (errors) {
            var err = new Error(errors[0].msg);
            next(err);
        }
        const {name, pharmacodynamics, indications, min_age, during_pregnancy, during_lactation, 
            during_old_age, contraindications, side_effects, interactions, dosing, storage_conditions, sales_rules} = req.body

        var result = await pool.query(`UPDATE drugs set name = $1, pharmacodynamics = $2, indications = $3, min_age = $4, during_pregnancy = $5, during_lactation = $6, 
            during_old_age = $7, contraindications = $8, side_effects = $9, interactions = $10, dosing = $11, storage_conditions = $12, sales_rules = $13 WHERE id_drug = $14 RETURNING id_drug`, [name, pharmacodynamics, indications, min_age, during_pregnancy, during_lactation, 
                during_old_age, contraindications, side_effects, interactions, dosing, storage_conditions, sales_rules, id_drug])
        
        console.log(result.rows[0].id_drug);
        res.status(200).send(`drug modified with ID: ${result.rows[0].id_drug}`)
    } catch (err) {
        next(err);
    }
});

router.put("/updateDisease", async (req, res, next) => {
    try {
        const id_disease = Number(req.body.id_disease)
        req.checkBody('id_disease', 'id_disease is required').notEmpty();
        var errors = req.validationErrors();
        if (errors) {
            var err = new Error(errors[0].msg);
            next(err);
        }
        const {name} = req.body

        var result = await pool.query(`UPDATE diseases set name = $1 WHERE id_disease = $2 RETURNING id_disease`, [name, id_disease])
        
        console.log(result.rows[0].id_disease);
        res.status(200).send(`disease modified with ID: ${result.rows[0].id_disease}`)
    } catch (err) {
        next(err);
    }
});

router.delete("/deleteDrug", async (req, res, next) => {
    try {
        const id_drug = Number(req.body.id_drug)
        req.checkBody('id_drug', 'id_drug is required').notEmpty();
        var errors = req.validationErrors();
        if (errors) {
            var err = new Error(errors[0].msg);
            next(err);
        }

        var result = await pool.query(`DELETE FROM drugs WHERE id_drug = $1`, [id_drug])
        
        console.log(`drug deleted with ID: ${id_drug}`);
        res.status(200).send(`drug deleted with ID: ${id_drug}`)
    } catch (err) {
        next(err);
    }
});

router.delete("/deleteDisease", async (req, res, next) => {
    try {
        const id_disease = Number(req.body.id_disease)
        req.checkBody('id_disease', 'id_disease is required').notEmpty();
        var errors = req.validationErrors();
        if (errors) {
            var err = new Error(errors[0].msg);
            next(err);
        }

        var result = await pool.query(`DELETE FROM diseases WHERE id_disease = $1`, [id_disease])
        
        console.log(`disease deleted with ID: ${id_disease}`);
        res.status(200).send(`disease deleted with ID: ${id_disease}`)
    } catch (err) {
        next(err);
    }
});


module.exports = router;