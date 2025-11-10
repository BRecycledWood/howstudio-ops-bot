const { App } = require("@slack/bolt");
const express = require("express");
import dotenv from "dotenv";

dotenv.config();

const expressApp = express();
const port = process.env.PORT || 3000;

const slackApp = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: false,
  processBeforeResponse: true,
});

// Listen to messages
slackApp.message(async ({ message, say }: any) => {
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

// Slack events endpoint
expressApp.post("/slack/events", async (req: any, res: any) => {
  await slackApp.processEvent(req, res);
});

// Health check
expressApp.get("/health", (req: any, res: any) => {
  res.status(200).json({ status: "ok" });
});

// Start server
expressApp.listen(port, () => {
  console.log(`⚡️ HowStudio Ops Bot is running on port ${port}`);
  console.log("✅ Bot is ready to receive messages from Slack");
});
