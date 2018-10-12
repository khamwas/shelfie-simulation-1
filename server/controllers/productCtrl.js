module.exports = {
  getAll: (req, res, next) => {
    req.app
      .get("db")
      .read_products()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  addProduct: (req, res, next) => {
    req.app
      .get("db")
      .add_product(req.body.name, req.body.price, req.body.img)
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  deleteProduct: (req, res, next) => {
    req.app
      .get("db")
      .delete_product(req.params.id)
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
    // console.log(req.params.id);
  },
  editProduct: (req, res, next) => {
    req.app
      .get("db")
      .edit_product(req.params.id, req.body.name, req.body.price, req.body.img)
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  }
};
