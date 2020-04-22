const Heroes = require("../models/Heroes");

module.exports = {
  create: (req, res, next) => {
    Heroes.create(
      {
        fullname: req.body.fullname,
        born: req.body.born,
        dead: req.body.dead,
        description: req.body.description,
        establishment: req.body.establishment,
      },
      (err, result) => {
        if (err) next(err);
        else {
          res.json({ status: "success", data: result });
        }
      }
    );
  },
  getData: (req, res, next) => {
    Heroes.find({})
      .then((result) => {
        res.json({ status: "success", data: result });
      })
      .catch((err) => err);
  },

  getDatabyId: (req, res) => {
    Heroes.findById(req.params.heroesId)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },

  deleteById: (req, res) => {
    Heroes.findByIdAndRemove(req.params.heroesId)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  editById: (req, res) => {
    Heroes.findByIdAndUpdate(req.params.heroesId, {
        
      fullname: req.body.fullname,
      born: req.body.born,
      dead: req.body.dead,
      description: req.body.description,
      establishment: req.body.establishment,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};

// create: (req, res, next) => {
//     Heroes.create(
//       {
//         fullname: req.body.fullname,
//         born: req.body.born,
//         dead: req.body.dead,
//         description: req.body.description,
//         establishment: req.body.establishment,
//       },
//     ).then(results => res.json(results)).catch(err => res.json(err))
//   },
