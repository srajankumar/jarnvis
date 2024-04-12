// pages/poem-generator.js
"use client";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function PoemGenerator() {
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
      setGeneratedPoem(data[0].generated_text);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto my-40 px-5 min-h-[100dvh]">
      <h1 className="text-2xl font-semibold text-center pb-2">
        J.A.R.V.I.S, but not Tony's
      </h1>
      <p className="pb-5 text-center">Enter your command sir</p>
      <div className="flex flex-col gap-5">
        <Textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text for poem generation..."
        ></Textarea>
        <Button
          variant="secondary"
          className="w-full"
          onClick={handleGeneratePoem}
          disabled={loading}
        >
          {loading ? (
            <div className="flex gap-3">
              Generating{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="2" r="0" fill="currentColor">
                  <animate
                    attributeName="r"
                    begin="0"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  />
                </circle>
                <circle
                  cx="12"
                  cy="2"
                  r="0"
                  fill="currentColor"
                  transform="rotate(45 12 12)"
                >
                  <animate
                    attributeName="r"
                    begin="0.125s"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  />
                </circle>
                <circle
                  cx="12"
                  cy="2"
                  r="0"
                  fill="currentColor"
                  transform="rotate(90 12 12)"
                >
                  <animate
                    attributeName="r"
                    begin="0.25s"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  />
                </circle>
                <circle
                  cx="12"
                  cy="2"
                  r="0"
                  fill="currentColor"
                  transform="rotate(135 12 12)"
                >
                  <animate
                    attributeName="r"
                    begin="0.375s"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  />
                </circle>
                <circle
                  cx="12"
                  cy="2"
                  r="0"
                  fill="currentColor"
                  transform="rotate(180 12 12)"
                >
                  <animate
                    attributeName="r"
                    begin="0.5s"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  />
                </circle>
                <circle
                  cx="12"
                  cy="2"
                  r="0"
                  fill="currentColor"
                  transform="rotate(225 12 12)"
                >
                  <animate
                    attributeName="r"
                    begin="0.625s"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  />
                </circle>
                <circle
                  cx="12"
                  cy="2"
                  r="0"
                  fill="currentColor"
                  transform="rotate(270 12 12)"
                >
                  <animate
                    attributeName="r"
                    begin="0.75s"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  />
                </circle>
                <circle
                  cx="12"
                  cy="2"
                  r="0"
                  fill="currentColor"
                  transform="rotate(315 12 12)"
                >
                  <animate
                    attributeName="r"
                    begin="0.875s"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  />
                </circle>
              </svg>
            </div>
          ) : (
            "Generate"
          )}
        </Button>
      </div>
      <div className="pt-10">
        {generatedPoem ? (
          <div>
            <h1 className="text-lg font-semibold pb-2">The Response:</h1>
            <div>{generatedPoem}</div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
