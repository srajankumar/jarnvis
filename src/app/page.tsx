"use client";

import { useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Note from "@/components/Note";
import GitHubLink from "@/components/GitHubLink";

export default function PoemGenerator() {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedText, setGeneratedText] = useState("");

  const prod = process.env.NEXT_PUBLIC_PRODUCTION;

  const handleGeneratePoem = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${prod}/api`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await response.json();
      setGeneratedText(data[0].generated_text);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[100dvh] flex justify-center items-center">
      <GitHubLink />
      <div className="max-w-3xl w-screen mx-auto px-5 will-change-transform will-change-opacity">
        <h1 className="text-2xl font-semibold text-center pb-2">
          J.A.R.V.I.T-G
        </h1>
        <p className=" text-stone-400 shadow-md text-center text-sm">
          Just A Rather Very Intelligent Text - Generator
        </p>
        <div className="flex flex-col items-end pb-5 max-w-2xl mx-auto">
          <img src="/line.svg" className="w-1/2" alt="line" />
        </div>
        <div className="flex flex-col gap-5">
          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your prompt"
          ></Textarea>
          <div className="bg-background rounded-md">
            <Button
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
        </div>
        <div className="pt-10">
          <h1 className="text-lg font-semibold pb-2">The Response</h1>
          <ScrollArea className="h-72 sm:h-[200px] bg-background rounded-md border p-3">
            <p
              dangerouslySetInnerHTML={{
                __html: generatedText.replace(/\n/g, "<br/>"),
              }}
            ></p>
          </ScrollArea>
        </div>
        <Note />
      </div>
    </div>
  );
}
