const Category = require('../models/categoryModel');

exports.getAllCategory = async (req, res) => {
    try {
      const categories = await Category.find({});
      res.status(200).send({
        success: true,
        message: "User Get Successfully",
        categories,
      });
    } catch (error) {
      res.status(404).send({
        success: true,
        error,
      });
    }
  };

  exports.createCategory = async(req,res)=>{
    const category = new Category({ name: req.body.name });
    try {
        const savedCategory = await category.save();
        res.status(200).json({
          success:true,
          message: "Category created Successfully",
          savedCategory,
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
  }
  
  exports.updateCategory = async(req,res)=>{
    try {
      const updatedCategory = await Category.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
      res.json(updatedCategory);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
  }

  exports.getCategoryById = async (req, res) => {
    try {
      const categories = await Category.findById(req.params.id);
      if (!categories) {
        res.status(404).send({
          success: false,
          message: "Category Not Found",
        });
      }
      res.status(200).send({
        success: true,
        message: "Category Found Successfully",
        users,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Internal Server Error",
        error,
      });
    }
  };

  exports.deleteCategory = async(req,res)=>{
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json({ message: 'Category deleted' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
  }


  