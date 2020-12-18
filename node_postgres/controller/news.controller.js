const db = require("../db");
class NewsController {
  async createNews(req, res) {
    for (const el of req.body) {
      const { title, body, category, category_id } = el;
      await db.query(
        `INSERT INTO news (title, body, category, category_id) values ($1, $2, $3, $4) RETURNING *`,
        [title, body, category, category_id]
      );

      console.log("title", title);
    }
    // res.json(newPost.rows[0]);
    res.sendStatus(200);
  }
  async getNewsByCategory(req, res) {
    const id = req.query.id;
    const news = await db.query(`select * from news where category_id = $1`, [
      id,
    ]);
    res.json(news.rows);
  }
}

module.exports = new NewsController();
