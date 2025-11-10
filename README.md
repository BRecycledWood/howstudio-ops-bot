# HowStudio Ops Bot

A Slack bot for managing HowStudio operations and tasks.

## Quick Start

### Prerequisites
- Node.js 18+
- Slack workspace with bot installed
- Slack Bot Token and Signing Secret

### Local Setup

```bash
npm install
cp .env.example .env
# Edit .env with your Slack credentials
npm run dev
```

Bot will start on `http://localhost:3000`

### Deploy to Railway

1. **Create Railway Account**
   - Go to railway.app
   - Sign up with GitHub

2. **Connect Repository**
   - Create new project
   - Connect your GitHub repo
   - Railway auto-deploys on git push

3. **Set Environment Variables**
   In Railway dashboard, add:
   ```
   SLACK_BOT_TOKEN=xoxb-your-token
   SLACK_SIGNING_SECRET=your-signing-secret
   PORT=3000
   ```

4. **Configure Slack Webhook**
   - Get your Railway deployment URL
   - Go to Slack app settings > Event Subscriptions
   - Set Request URL: `https://your-railway-url/slack/events`
   - Subscribe to events: `message.channels`, `message.groups`, `message.im`
   - Save

5. **Test**
   - Send message to bot in Slack
   - Bot should respond

## Commands

- `hello` or `hi` - Greeting
- `help` - Show help
- `status` - Check bot status

## Development

```bash
# Type check
npm run check

# Build
npm run build

# Start production
npm start
```

## Troubleshooting

### Bot doesn't respond
1. Check Slack token is correct
2. Check signing secret is correct
3. Verify webhook URL is configured
4. Check bot is invited to channel

### Deployment fails on Railway
1. Check `npm run check` passes
2. Check Node.js version is 18+
3. Check environment variables are set
4. Check logs in Railway dashboard

## Architecture

Simple Slack Bolt app using socket mode for development and HTTP for production.

- **Framework**: Slack Bolt
- **Language**: TypeScript
- **Runtime**: Node.js
- **Database**: None (stateless)

## License

ISC
