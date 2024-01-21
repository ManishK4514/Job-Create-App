const {Router} = require("express");
const { getJob, saveJob, updateJob, deleteJob } = require("../controllers/JobController");

const router = Router()

router.get('/', getJob)
router.post('/save', saveJob)
router.post('/update', updateJob)
router.post('/delete', deleteJob)

module.exports = router;