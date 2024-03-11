const multer = require('multer')
const cripto = require('crypto')

const multerConfig = {
  storage: multer.diskStorage({
    filename(request, file, callback) {
      const fileHash = cripto.randomBytes(10).toString('hex')
      const fileName = `${fileHash}-${file.originalname}`
      
      return callback(null, fileName)
    }
  })
}

module.exports = multerConfig 
