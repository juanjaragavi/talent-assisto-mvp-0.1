export let assistantId = "asst_7YOTAgWF4OPT7pJ4YodW2Tgz"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
