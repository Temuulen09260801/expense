const { Router } = require("express");
const {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
} = require("../controllers/user-controller");

const router = Router();

router.route("/").get(getAllUser).post(createUser);
router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
