Python 3.14.5 (tags/v3.14.5:5607950, May 10 2026, 10:43:50) [MSC v.1944 64 bit (AMD64)] on win32
Enter "help" below or click "Help" above for more information.
>>> const express = require("express");
... const mongoose = require("mongoose");
... const cors = require("cors");
... require("dotenv").config();
... 
... const blogRoutes = require("./routes/blogRoutes");
... 
... const app = express();
... 
... app.use(cors());
... app.use(express.json());
... 
... mongoose.connect(process.env.MONGO_URI)
...     .then(() => console.log("MongoDB Connected"))
...     .catch(err => console.log(err));
... 
... app.use("/api/blogs", blogRoutes);
... 
... app.get("/", (req, res) => {
...     res.json({
...         message: "Welcome to BlogNest API"
...     });
... });
... 
... const PORT = process.env.PORT || 5000;
... 
... app.listen(PORT, () => {
...     console.log(`Server running on port ${PORT}`);
