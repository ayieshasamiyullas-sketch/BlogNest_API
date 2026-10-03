Python 3.14.5 (tags/v3.14.5:5607950, May 10 2026, 10:43:50) [MSC v.1944 64 bit (AMD64)] on win32
Enter "help" below or click "Help" above for more information.
>>> const mongoose = require("mongoose");
... 
... const blogSchema = new mongoose.Schema(
...     {
...         title: {
...             type: String,
...             required: true
...         },
... 
...         content: {
...             type: String,
...             required: true
...         },
... 
...         author: {
...             type: String,
...             required: true
...         },
... 
...         category: {
...             type: String,
...             default: "General"
...         }
...     },
...     {
...         timestamps: true
...     }
... );
... 
