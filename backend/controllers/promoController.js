const db = require("../config/db");

exports.getPromos = (req, res) => {

    const sql = `
        SELECT *
        FROM promos
        WHERE is_active = true
        ORDER BY created_at DESC
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};