const Product = require('../models/Product');

function index(req,res){
    Product.find({})
        .then(citas => {
            if(citas.length) return res.status(200).send({citas});
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.citas) return res.status(404).send({message: 'NOT FOUND'});
    let citas = req.body.citas;
    return res.status(200).send({citas});
    
}

function create(req,res){
    new Product(req.body).save().then(product => res.status(201).send({product})).catch(error => res.status(500).send({error}));
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.citas) return res.status(404).send({message: 'NOT FOUND'});
    let product = req.body.citas[0];
    product = Object.assign(product,req.body);
    product.save().then(product => res.status(200).send({message: "UPDATED", product})).catch(error => res.status(500).send({error}));
}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.citas) return res.status(404).send({message: 'NOT FOUND'});
    req.body.citas[0].remove().then(product => res.status(200).send({message: 'REMOVED', product})).catch(error => res.status(500).send({error}));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Product.find(query).then(citas => {
        if(!citas.length) return next();
        req.body.citas = citas;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}