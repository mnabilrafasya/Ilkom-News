// controllers/Category.js
import Category from "../models/CategoryModel.js";

export const getCategories = async (req, res) => {
  try {
    const data = await Category.findAll({
      attributes: ["id", "slug", "nama"],
      order: [["nama", "ASC"]],
    });
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};
