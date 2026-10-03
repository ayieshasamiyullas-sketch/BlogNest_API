Python 3.14.5 (tags/v3.14.5:5607950, May 10 2026, 10:43:50) [MSC v.1944 64 bit (AMD64)] on win32
Enter "help" below or click "Help" above for more information.
const express = require("express");
const Blog = require("../models/Blog");

const router = express.Router();

// CREATE BLOG
router.post("/", async (req, res) => {
    try {
        const blog = new Blog(req.body);
        const savedBlog = await blog.save();

        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// GET ALL BLOGS
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });

        res.json(blogs);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// GET BLOG BY ID
router.get("/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.json(blog);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// UPDATE BLOG
router.put("/:id", async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
...             req.body,
...             { new: true }
...         );
... 
...         if (!blog) {
...             return res.status(404).json({
...                 message: "Blog not found"
...             });
...         }
... 
...         res.json(blog);
...     } catch (error) {
...         res.status(400).json({
...             message: error.message
...         });
...     }
... });
... 
... // DELETE BLOG
... router.delete("/:id", async (req, res) => {
...     try {
...         const blog = await Blog.findByIdAndDelete(req.params.id);
... 
...         if (!blog) {
...             return res.status(404).json({
...                 message: "Blog not found"
...             });
...         }
... 
...         res.json({
...             message: "Blog deleted successfully"
...         });
...     } catch (error) {
...         res.status(500).json({
...             message: error.message
...         });
...     }
... });
... 
