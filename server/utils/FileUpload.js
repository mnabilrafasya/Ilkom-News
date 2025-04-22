import multer from "multer";

const FILE_TYPE = {
    'image/png' : 'png',
    'image/jpeg' : 'jpeg',
    'image/jpg' : 'jpg',
}

const storageFile = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValidformat = FILE_TYPE[file.mimetype];
        let uploadError = new Error("Invalid Image Type");

        if(isValidformat){
            uploadError = null;
        }

      cb(uploadError, 'public/uploads');
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-');
        const extention = FILE_TYPE[file.mimetype];
        const uniqueFileImage = fileName + "-" + Date.now() + '.' + extention;

        cb(null, uniqueFileImage);
    }
  });
  
  export const uploadOption = multer({ storage: storageFile });