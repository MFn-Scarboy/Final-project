const express    = require("express")
const router     = express.Router()
const bcrypt     = require("bcrypt")
const bcryptSalt = 10
const User       = require("../models/user")
const mongoose   = require("mongoose")
const multer     = require("multer")


module.exports = router