export let assistantId = "asst_7YOTAgWF4OPT7pJ4YodW2Tgz";

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}

export let threadId = "thread_3X0MATTAy1xAZgpE66Z1C0GT";

if (threadId === "") {
  threadId = process.env.OPENAI_THREAD_ID;
}
