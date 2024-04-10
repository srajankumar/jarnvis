const express = require("express");
const Replicate = require("replicate"); // Import Replicate library
const cors = require("cors");

const app = express();
const port = 3001;

const replicate = new Replicate();

app.use(cors());
app.use(express.json());

app.post("/generate-poem", async (req, res) => {
  const input = req.body;

  console.log(input);

  try {
    const results = [];

    for await (const event of replicate.stream("meta/llama-2-70b-chat", {
      input,
    })) {
      results.push(event);
    }

    res.json({ success: true, data: results.join("") });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
