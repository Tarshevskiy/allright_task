const db = require("../db");
class PostController {
  async createPost(req, res) {
    const { title, body, category_id } = req.body;
    const newPost = await db.query(
      `INSERT INTO post (title, body, category_id) values ($1, $2, $3) RETURNING *`,
      [title, body, category_id]
    );
    res.json(newPost.rows[0]);
  }
  async getPostsByCategory(req, res) {
    const id = req.query.id;
    const posts = await db.query(`select * from post where category_id = $1`, [
      id,
    ]);
    res.json(posts.rows);
  }
}

module.exports = new PostController();
