const Country = require("../models/Country");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// privateKey = "akusukakopi"

module.exports = {
  create: (req, res, next) => {
    Country.create(
      {
        name: req.body.name,
        secreat: req.body.secreat,
        number: req.body.number,
        
      },
      (err, result) => {
        if (err) next(err);
        else {
          res.json({ status: "success", data: result });
        }
      }
    );
  },

//   authenticated: function (req, res, next) {
//     Country.findOne({
//       email: req.body.email,
//     })
//       .then((response, err) => {
//         if (err) next(err);
//         else {
//           if (
//             response != null &&
//             bcrypt.compareSync(req.body.password, response.password)
//           ) {
//             jwt.sign(
//               {
//                 id: response._id,
//               },
//               privateKey,
//               { expiresIn: 60 * 60 },
//               (err, token) => {
//                 res.json(token);
//               }
//             );
//           } else {
//             res.json({ status: err });
//           }
//         }
//       })
//       .catch((err) => {
//         throw err;
//       });
//   },


  getData: (req, res, next) => {
    Country.find({})
      .then((result) => {
        res.json({ status: "success", data: result });
      })
      .catch((err) => err);
  },

  getDatabyId: (req, res) => {
    Country.findById(req.params.countryId)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },

  deleteById: (req, res) => {
    Country.findByIdAndRemove(req.params.countryId)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  editById: (req, res) => {
    Country.findByIdAndUpdate(req.params.countryId, {
        
        name: req.body.name,
        secreat: req.body.secreat,
        number: req.body.number,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};