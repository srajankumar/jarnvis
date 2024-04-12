"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [generatedPoem, setGeneratedPoem] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGeneratePoem = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/generate-poem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await response.json();
      setGeneratedPoem(data[0].generated_text); // Update to access generated_text property
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Poem Generator</h1>
      <Textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text for poem generation..."
      ></Textarea>
      <br />
      <Button
        variant={"secondary"}
        onClick={handleGeneratePoem}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Poem"}
      </Button>
      {generatedPoem && (
        <div>
          <h2>Generated Poem</h2>
          <p>{generatedPoem}</p>
        </div>
      )}
    </div>
  );
}

export default App;
