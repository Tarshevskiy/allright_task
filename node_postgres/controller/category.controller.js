const db = require("../db");
class CategoryController {
  async createCategory(req, res) {
    for (const el of req.body) {
      const { name, type, children } = el;
      await db.query(
        `INSERT INTO category (name, alias, type, children) values ($1, $2, $3, $4) RETURNING *`,
        [name, alias, type, JSON.stringify(children)]
      );
    }
    res.sendStatus(200);
  }

  async getCategories(req, res) {
    const categories = await db.query(`SELECT * FROM category`);
    res.json(categories.rows);
  }

  async getOneCategory(req, res) {
    const id = req.params.id;
    const category = await db.query(`SELECT * FROM category where id = $1`, [
      id,
    ]);
    res.json(category.rows[0]);
  }

  async updateCategory(req, res) {
    for (const el of req.body) {
      const { id, name, alias, type, children } = el;
      await db.query(
        "UPDATE category set name = $1, alias = $2, type = $3, children = $4 where id = $5 RETURNING *",
        [name, alias, type, JSON.stringify(children), id]
      );
    }
    // res.json(category.rows[0]);
    res.sendStatus(200);
  }

  //   async deleteCategory(req, res) {
  //     const id = req.params.id;
  //     const category = await db.query(`DELETE FROM category where id = $1`, [id]);
  //     res.json(category.rows[0]);
  //   }
}

module.exports = new CategoryController();
