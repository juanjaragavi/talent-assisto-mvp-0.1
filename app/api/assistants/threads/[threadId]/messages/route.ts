import { assistantId } from "@/app/assistant-config";
import { threadId } from "@/app/assistant-config";
import { openai } from "@/app/openai";
import { Request } from "express";

export const runtime = "nodejs";

type CustomRequest = Request & {
  json: () => Promise<any>;
};

// Send a new message to a thread
export async function POST(request: CustomRequest, {}) {
  const { content } = await request.json();

  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: content,
  });

  const stream = openai.beta.threads.runs.stream(threadId, {
    assistant_id: assistantId,
  });

  return new Response(stream.toReadableStream());
}
