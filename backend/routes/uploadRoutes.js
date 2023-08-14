import path from 'path';
import express from 'express';
import multer from 'multer';
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/'); // null is for errors
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    ); 
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/; // regular expression
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // test if the file extension matches the filetypes
  const mimetype = filetypes.test(file.mimetype); // test if the file mimetype matches the filetypes

  if (extname && mimetype) {
    return cb(null, true); 
  } else {
    cb('Images only!');
  }
}

const upload = multer({
  storage,
});

router.post('/', upload.single('image'), (req, res) => {
  res.send({
    message: 'Image Uploaded',
    image: `/${req.file.path}`,
  });
});

export default router;
