const db = require("../db");
class ForumsController {
  async createForums(req, res) {
    for (const el of req.body) {
      const { title, body, category, category_id } = el;
      await db.query(
        `INSERT INTO forums (title, body, category, category_id) values ($1, $2, $3, $4) RETURNING *`,
        [title, body, category, category_id]
      );
    }
    // res.json(newPost.rows[0]);
    res.sendStatus(200);
  }
  async getForumsByCategory(req, res) {
    const id = req.query.id;
    const forums = await db.query(
      `select * from forums where category_id = $1`,
      [id]
    );
    res.json(forums.rows);
  }
}

module.exports = new ForumsController();
