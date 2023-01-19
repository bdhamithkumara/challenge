import { db } from '../db.js';

export const getAllComments = (_, res) => {
    const q = "SELECT * FROM userdata ORDER BY id DESC";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addComment = (req, res) => {
    const q = "INSERT INTO userdata(`comment`) VALUES(?)";

    const values = [

        req.body.comment,

    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("insert done");
    });
};

export const updateUpvote = (req, res) => {
    const q = "UPDATE userdetails set `votevalue` = ?  where `id` = ? "

    const values = [
        req.body.btnupvote,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("update is completed");
    });
};
