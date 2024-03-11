const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const fs = require("fs").promises
const supabase = require("../configs/supabaseConfig")

class UsersAvatarController {
  async update(req, res) {
    const user_id = req.user.id
    const file = req.file
    const fileName = file.filename

    const user = await knex("users").where({ id: user_id }).first()

    if (!user) {
      throw new AppError("Somente usuários autenticados podem alterar o avatar", 401)
    }

    const fileBuffer = await fs.readFile(file.path)
    const { data, error } = await supabase.storage
      .from("Upload-avatar")
      .upload(fileName, fileBuffer, {
        contentType: file.mimetype,
      })

    if (error) {
      throw new AppError(`Erro ao fazer upload do arquivo: ${error.message}`, 400)
    } else {
      fs.unlink(file.path)
        .then(() => console.log("Arquivo temporário excluído com sucesso"))
        .catch((err) => console.error("Erro ao excluir arquivo temporário:", err));
    }

    if (user.avatar) {
      const urlParts = user.avatar.split('/') 
      const avatarName = urlParts[urlParts.length - 1]
      await supabase.storage.from("Upload-avatar").remove([
        avatarName,
      ])
      console.log("Remoção do avatar anterior concluída com sucesso.");
    }

    const { data:avatarUrl } = supabase.storage.from('Upload-avatar').getPublicUrl(fileName)

    user.avatar = avatarUrl.publicUrl
    await knex("users").where({ id: user_id }).update(user)

    return res.json(user)
  }
}

module.exports = UsersAvatarController
