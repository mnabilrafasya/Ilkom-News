import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import Category from "./CategoryModel.js";

const { DataTypes } = Sequelize;

// Struktur Tabel Berita dgn Model Sequelize
const Berita = db.define(
  "berita",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    judul: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    tanggal: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
        isDate: true,
      },
    },
    isi: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true },
    },
  },
  {
    freezeTableName: true,
  }
);

// Relasi Tabel Antara User dan Berita
Users.hasMany(Berita, { foreignKey: "userId" });
Berita.belongsTo(Users, { foreignKey: "userId" });
// Relasi Tabel Antara Category dan Berita
Category.hasMany(Berita,   { foreignKey: 'categoryId' });
Berita.belongsTo(Category, { foreignKey: 'categoryId' });

export default Berita;