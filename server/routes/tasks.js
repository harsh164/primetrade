const router = require("express").Router()
const Task = require("../models/Task")
const auth = require("../middleware/auth")

router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id })
  res.json(tasks)
})

router.post("/", auth, async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    userId: req.user.id
  })
  res.json(task)
})

router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id)
  res.send("Deleted")
})

router.put("/:id", auth, async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title },
    { new: true }
  )
  res.json(task)
})


module.exports = router
