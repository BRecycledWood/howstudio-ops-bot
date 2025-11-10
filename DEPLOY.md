# HowStudio Ops Bot - Deployment Guide

## Ready to Deploy! ✅

Your bot is now ready for deployment. Follow these steps to get it live on Railway.

## Prerequisites ✓
- ✅ Bot code is ready
- ✅ Slack credentials configured (.env file)
- ✅ GitHub account (for Railway)
- ✅ Slack workspace with bot installed

## Step 1: Push to GitHub

```bash
cd /Users/bkerwood/howstudio-ops-bot

# Initialize git repo
git init
git add .
git commit -m "Initial commit: HowStudio Ops Bot"

# Create repo on GitHub and push
git remote add origin https://github.com/YOUR-USERNAME/howstudio-ops-bot.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Railway

### Option A: Railway Web Dashboard (Easiest)

1. Go to **https://railway.app**
2. Sign in with GitHub
3. Click **"New Project"**
4. Select **"Deploy from GitHub"**
5. Select your `howstudio-ops-bot` repository
6. Railway will auto-detect the Node.js project
7. Click **"Deploy"**

### Option B: Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Deploy from project directory
cd /Users/bkerwood/howstudio-ops-bot
railway up
```

## Step 3: Set Environment Variables

In Railway dashboard:

1. Go to your project
2. Click **"Variables"** tab
3. Add these environment variables:

```
SLACK_BOT_TOKEN = [your-xoxb-token]
SLACK_SIGNING_SECRET = [your-signing-secret]
PORT = 3000
```

4. Railway will automatically redeploy

## Step 4: Get Your Deployment URL

In Railway dashboard:

1. Go to **"Deployments"** tab
2. Click on the latest deployment
3. Copy the URL from the "Service" section
4. It will look like: `https://your-project-production-xxxx.railway.app`

**Save this URL** - you'll need it for Slack configuration

## Step 5: Configure Slack Webhook

Go to your Slack app at **https://api.slack.com/apps**

1. Select your app: "HowStudio Ops Bot"
2. Go to **"Event Subscriptions"** (left sidebar)
3. Find **"Request URL"** section
4. Enter: `https://your-railway-url/slack/events`
5. Wait for Slack to verify (should show green checkmark ✓)
6. Under **"Bot Events"** subscribe to:
   - `message.channels`
   - `message.groups`
   - `message.im`
7. Click **"Save Changes"**

## Step 6: Test Your Bot

In Slack:

1. Go to any channel
2. Invite the bot: `/invite @HowStudio Ops Bot`
3. Send a message: `hello`
4. Bot should respond immediately

**Success! Your bot is live!** 🎉

## Monitoring

In Railway dashboard:

- **Logs**: Click "Logs" tab to see real-time logs
- **Status**: Green checkmark means bot is running
- **Deployments**: View deployment history
- **Metrics**: Monitor CPU, memory, network

## Troubleshooting

### Bot doesn't respond in Slack

**Check 1: Environment variables are set**
- Go to Railway dashboard
- Verify `SLACK_BOT_TOKEN` and `SLACK_SIGNING_SECRET` are set
- Check values don't have extra quotes or spaces

**Check 2: Webhook URL is correct**
- Go to Slack app Event Subscriptions
- Verify Request URL matches your Railway URL
- Should show green checkmark

**Check 3: Bot is running**
- Go to Railway Deployments
- Check status is "Ready" (green)
- Check logs for errors

**Check 4: Bot is invited to channel**
- In Slack, invite bot: `/invite @HowStudio Ops Bot`
- Verify bot appears in channel members

### Build fails on Railway

**Check logs**:
1. Go to Railway dashboard
2. Click "Logs" tab
3. Look for error messages

**Common fixes**:
- Run `npm run check` locally - fix TypeScript errors
- Check `package.json` has all dependencies
- Check `tsconfig.json` is valid

### Deployment is slow

- Railway builds take 1-2 minutes first time
- Subsequent deployments are faster
- Check deployment status in Railway dashboard

## Update Your Bot

To make changes:

1. Edit code locally
2. Test: `npm run dev`
3. Commit: `git add . && git commit -m "Update bot"`
4. Push: `git push origin main`
5. Railway auto-deploys (1-2 minutes)

## Next Steps

### Immediate
- ✅ Bot is live and responding to messages
- Test with more messages
- Invite bot to more channels

### Add More Features
- Add commands (slash commands)
- Integrate with Notion
- Add buttons and interactive elements
- Set up proactive messages

### Production Best Practices
- Set up error monitoring (Sentry, etc)
- Configure rate limiting
- Add logging
- Set up backups if needed

## Support

- **Railway Docs**: https://docs.railway.app
- **Slack Bolt Docs**: https://slack.dev/bolt-js
- **Issues**: Check Railway/Slack documentation or GitHub

---

## Quick Reference

| Item | Value |
|------|-------|
| Framework | Slack Bolt |
| Language | TypeScript |
| Host | Railway |
| Status | ✅ Ready |
| URL | https://your-railway-url |

---

**Estimated deployment time: 10-15 minutes**

**You're all set! 🚀**
