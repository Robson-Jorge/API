const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body

    const checkUserExists = await knex("users").where({ email }).first()
    if (checkUserExists) {
      throw new AppError("Este e-mail já existe!")
    }

    const hashedPassword = await hash(password, 8)
    await knex("users").insert({
      name,
      email,
      password: hashedPassword,
    })

    return res.status(201).json()
  }

  async update(req, res) {
    const { name, email, password, old_password } = req.body
    const user_id = req.user.id

    const user = await knex("users").where({ id: user_id }).first()

    if (!user) {
      throw new AppError("Usuário não encontrado")
    }

    const userWithUpdatedEmail = email ? await knex("users").where({ email }).first() : null

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso!")
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if (password && !old_password) {
      throw new AppError("Você precisa informar a senha antiga para definir a nova senha")
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere")
      }

      user.password = await hash(password, 8)
    }

    await knex("users").where("id", user_id).update({
      name: user.name,
      email: user.email,
      password: user.password,
    })

    return res.json()
  }
}

/* métodos de um class controller 
* index - Get para listar vários registros
* show - Get para mostrar um único registro 
* create - Post para criar um novo registro 
* update - Put para atualizar um registro 
* delete - Delete para deletar um registro
*/

module.exports = UsersController
