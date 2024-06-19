export let assistantId = "asst_4rYFGWjzcZ5DvsVfyWsa9a1W";

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}

export let threadId = "thread_zvB8pXoKvP4kU8AiI4tyrwj0";

if (threadId === "") {
  threadId = process.env.OPENAI_THREAD_ID;
}
