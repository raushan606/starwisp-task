const express = require("express");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const UniDetail = require("../models/UniDetail");

const router = express.Router();

//* @route  GET api/unidetails
//* @desc   Get all UniDetatils
//* @access Private
router.get("/", auth, async (req, res) => {
  try {
    const unidetails = await UniDetail.find();
    res.status(200).json(unidetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//* @route  GET api/unidetails/:id
//* @desc   Get single UniDetatils
//* @access Private
router.get("/:id", auth, async (req, res) => {
  try {
    let unidetail = await UniDetail.findById(req.params.id);

    //* Check if unidetail is exists or not
    if (!unidetail) {
      return res.status(404).json({
        msg: "University Not Found",
      });
    }

    res.status(200).json(unidetail);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//* @route  POST api/unidetails
//* @desc   Create a UniDetail
//* @access Private
router.post(
  "/",
  [
    auth,

    [
      check("uniname", "University Name is required").not().isEmpty(),
      check("imgUrl", "Image Url is required").not().isEmpty(),
      check("webUrl", "Web Url is required").not().isEmpty(),
      check("registrationDate", "Registration Date is required").isDate(),
      check("expiryDate", "Registration Date is required").isDate(),
      check("noOfStudent", "Number of Student is required").isNumeric(),
      check("email", "Please include a valid email").isEmail(),
      check("contactNo", "Number of Student is required")
        .isNumeric()
        .isLength({ min: 10, max: 10 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const uniName = req.body.uniname;
    try {
      const uniDetail = await UniDetail.findOne({ uniname: uniName });

      if (uniDetail) {
        return res.status(400).json({
          msg: "University already exists.",
        });
      }

      const newUniDetail = new UniDetail({
        uniname: req.body.uniname,
        registrationDate: req.body.registrationDate,
        imgUrl: req.body.imgUrl,
        webUrl: req.body.webUrl,
        expiryDate: req.body.expiryDate,
        noOfStudent: req.body.noOfStudent,
        email: req.body.email,
        contactNo: req.body.contactNo,
      });

      const unidetail = await newUniDetail.save();
      res.json(unidetail);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//* @route  PUT api/unidetails/:id
//* @desc   Update UniDetail
//* @access Private
router.put("/:id", [auth], async (req, res) => {
  try {
    let unidetail = await UniDetail.findById(req.params.id);

    //* Check if unidetail is exists or not
    if (!unidetail) {
      return res.status(404).json({
        msg: "University Not Found",
      });
    }

    unidetail = await UniDetail.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(unidetail);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//* @route  DELETE api/unidetails/:id
//* @desc   Delete UniDetail
//* @access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const unidetail = await UniDetail.findById(req.params.id);

    //* Check if unidetail is exists or not
    if (!unidetail) {
      return res.status(404).json({
        msg: "University Not Found",
      });
    }

    unidetail.remove();
    res.json(unidetail);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
