const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

router.post("/register", async (req, res) => {
  console.log("REGISTER HIT", req.body)

  try {
    const { name, email, password } = req.body

    const hashed = await bcrypt.hash(password, 10)
    const user = await User.create({ name, email, password: hashed })

    res.json(user)
  } catch (err) {
    console.log("REGISTER ERROR:", err)
    res.status(500).json({ msg: "Server error" })
  }
})

router.post("/login", async (req, res) => {
  console.log("LOGIN HIT", req.body)

  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ msg: "User not found" })

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(400).json({ msg: "Wrong password" })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.json({ token })
  } catch (err) {
    console.log("LOGIN ERROR:", err)
    res.status(500).json({ msg: "Server error" })
  }
})

module.exports = router
