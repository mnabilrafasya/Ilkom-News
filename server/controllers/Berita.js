import Berita from "../models/BeritaModel.js";
import User from "../models/UserModel.js";

// Mengambil semua berita
export const getBerita = async(req, res) => {
    try {
        let response;
        if(req.role === "admin"){
            response = await Berita.findAll({
                attributes: ['uuid', 'judul', 'tanggal', 'isi', 'foto'],
                include: [{
                    model: User, 
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// Mengambil 1 berita berdasarkan UUID
export const getBeritaById = async(req, res) => {
    try {
        const berita = await Berita.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!berita) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Berita.findOne({
                attributes: ['uuid', 'judul', 'tanggal', 'isi', 'foto'],
                where: {
                    id: berita.id
                },
                include: [{
                    model: User, 
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// Tambah berita baru
export const createBerita = async(req, res) => {
    const { judul, tanggal, isi} = req.body;
    const file = req.file;

    // Validasi jika file tidak diinput
    if(!file){
        res.status(400);
        throw new Error("Tidak ada file image yang diinput");
    }

    const fileName = file.filename;
    const pathFile = `${req.protocol}://${req.get('host')}/public/uploads/${fileName}`;

    try {
        await Berita.create({
            judul: judul,
            tanggal: tanggal,
            isi: isi,
            foto: pathFile,
            userId: req.userId
        });
        res.status(201).json({msg: "Berita created successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// Update data berita
export const updateBerita = async(req, res) => {
    try {
        const berita = await Berita.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!berita) return res.status(404).json({msg: "Data tidak ditemukan"});
        const { judul, tanggal, isi, foto} = req.body;
        if(req.role === "admin"){
            await Berita.update({judul, tanggal, isi, foto},{
                where:{
                    id: berita.id
                }
            });
        }
        res.status(200).json({msg: "Product updated successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// Hapus berita
export const deleteBerita = async(req, res) => {
    try {
        const berita = await Berita.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if(!berita) return res.status(404).json({msg: "Data tidak ditemukan"});
        if(req.role === "admin"){
            await Berita.destroy({
                where:{
                    id: berita.id
                }
            });
        }
        res.status(200).json({msg: "Product deleted successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}