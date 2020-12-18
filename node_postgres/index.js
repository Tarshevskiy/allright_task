const express = require("express");
const categoryRouter = require("./routes/category.routes");
const postRouter = require("./routes/post.routes");

const categoryBlogs = require("./routes/blogs.routes");
const categoryNews = require("./routes/news.routes");
const categoryForums = require("./routes/forums.routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use("/api", categoryRouter);
app.use("/api", postRouter);

app.use("/api", categoryBlogs);
app.use("/api", categoryNews);
app.use("/api", categoryForums);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
