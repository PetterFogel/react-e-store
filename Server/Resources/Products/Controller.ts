const Product = require('./Model')

module.exports.getProducts = function(req: any, res: any) {
    Product.find().sort()
    .then((result: any) => {
      res.status(200).json(result)
      console.log(Product)
    })
    .catch((err: any) => {
      console.log(err);
    })
};

module.exports.getSpecific = function(req: any, res: any) {
  res.send("specific");
};

module.exports.addNewProduct = function(req: any, res: any) {
  if(req.body){
    if(!req.body.title){
      return res.status(400).json('Cant add product')
    }
    const product = new Product({
      title: req.body.title,
      price: req.body.price,
      size: req.body.size,
      quantity: req.body.quantity,
      category: req.body.category,
    })
    product.save()
    res.status(201).json(product)
  }
};

module.exports.deleteProduct = function (req: any, res: any) {
  res.send("deleted");
};

module.exports.editProduct = function (req: any, res: any) {
  res.send("edit");
};