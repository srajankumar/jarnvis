// const express = require("express");
// const Replicate = require("replicate"); // Import Replicate library
// const cors = require("cors");

// const app = express();
// const port = 3001;

// const replicate = new Replicate();

// app.use(cors());
// app.use(express.json());

// app.post("/generate-poem", async (req, res) => {
//   const input = req.body;

//   console.log(input);

//   try {
//     const results = [];

//     for await (const event of replicate.stream("meta/llama-2-70b-chat", {
//       input,
//     })) {
//       results.push(event);
//     }

//     res.json({ success: true, data: results.join("") });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "An error occurred" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;
const API_TOKEN = "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";

app.use(cors());
app.use(express.json());

app.post("/generate-poem", async (req, res) => {
  try {
    const { text } = req.body;
    console.log("Request Text:", text); // Log request text
    const fetch = await import("node-fetch"); // Dynamic import
    const response = await fetch.default(
      "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta",
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: text }), // Ensure 'inputs' field is included
      }
    );
    const responseData = await response.json(); // Parse response as JSON
    console.log("Response Data:", responseData); // Log response data
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
