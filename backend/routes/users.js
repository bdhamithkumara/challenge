import express from "express";
import {getAllComments,addComment,updateUpvote} from '../controllers/user.js';

const router = express.Router();

router.get("/",getAllComments);

router.post("/",addComment);

router.put("/:id",updateUpvote);

export default router;