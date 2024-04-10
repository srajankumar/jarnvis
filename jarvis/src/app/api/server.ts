import Replicate from "replicate";

export default async function handler(req: any, res: any) {
  const replicate = new Replicate();
  const { top_p, prompt, temperature, system_prompt, max_new_tokens } =
    req.body;

  const input = {
    top_p,
    prompt,
    temperature,
    system_prompt,
    max_new_tokens,
  };

  try {
    const poem = [];
    for await (const event of replicate.stream("meta/llama-2-70b-chat", {
      input,
    })) {
      poem.push(event);
    }
    res.status(200).json({ poem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate poem" });
  }
}
