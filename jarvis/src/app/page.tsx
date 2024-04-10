// pages/poem-generator.js
"use client";
import { useState } from "react";

export default function PoemGenerator() {
  const [prompt, setPrompt] = useState("");
  const [generatedPoem, setGeneratedPoem] = useState("");

  const generatePoem = async () => {
    try {
      const response = await fetch("http://localhost:3001/generate-poem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          top_p: 1,
          prompt,
          temperature: 0.5,
          system_prompt:
            "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
          max_new_tokens: 500,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setGeneratedPoem(data.data);
      } else {
        alert("Failed to generate poem. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h1>Open Source Poem Generator</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
      ></textarea>
      <br />
      <button onClick={generatePoem}>Generate Poem</button>
      <div>{generatedPoem}</div>
    </div>
  );
}
