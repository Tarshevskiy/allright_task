const db = require("../db");
class BlogsController {
  async createBlogs(req, res) {
    for (const el of req.body) {
      const { title, body, category, category_id } = el;
      await db.query(
        `INSERT INTO blogs (title, body, category, category_id) values ($1, $2, $3, $4) RETURNING *`,
        [title, body, category, category_id]
      );
    }
    // res.json(newPost.rows[0]);
    res.sendStatus(200);
  }
  async getBlogsByCategory(req, res) {
    const id = req.query.id;
    const blogs = await db.query(`select * from blogs where category_id = $1`, [
      id,
    ]);
    res.json(blogs.rows);
  }
}

module.exports = new BlogsController();
