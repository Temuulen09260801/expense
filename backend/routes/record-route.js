const { Router } = require("express");
const {
  createRecord,
  getAllRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/record-controller");

const router = Router();

router.route("/").get(getAllRecord).post(createRecord);
router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
