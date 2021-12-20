const express = require("express");
const router = express.Router();

const StudentController = require("../controllers/StudentController");

router.get("/student", StudentController.index);

router.post("/student", StudentController.store);

router.put("/student/:id", StudentController.update);

router.delete("/student/:id", StudentController.destroy);

module.exports = router;
