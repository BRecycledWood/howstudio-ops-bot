import { App } from "@slack/bolt";
import dotenv from "dotenv";

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: false,
});

// Listen to messages
app.message(async ({ message, say }) => {
  if (!("text" in message) || !message.text) return;

  const text = message.text.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    await say({
      text: "Hey there! 👋 I'm HowStudio Ops Bot. I can help you manage your work right from Slack!",
      thread_ts: message.ts,
    });
  } else if (text.includes("help")) {
    await say({
      text: `Here's what I can do:
• \`hello\` - Say hi
• \`help\` - Show this message
• \`status\` - Show my status`,
      thread_ts: message.ts,
    });
  } else if (text.includes("status")) {
    await say({
      text: "✅ I'm online and ready to help!",
      thread_ts: message.ts,
    });
  }
});

// Start the bot
async function start() {
  const port = process.env.PORT || 3000;
  await app.start(port as number);
  console.log(`⚡️ HowStudio Ops Bot is running on port ${port}`);
  console.log("✅ Bot is ready to receive messages from Slack");
}

start().catch((error) => {
  console.error("Failed to start bot:", error);
  process.exit(1);
});
