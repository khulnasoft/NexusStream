# Overview

The Nexusstream Slack app enables you to build event-driven workflows that interact with the Slack API. When you authorize the Nexusstream app's access to your workspace, you can use [Nexusstream workflows](/workflows/) to perform common Slack [actions](#workflow-actions), or [write your own code](/code/) against the Slack API.

The Nexusstream Slack app is not a typical app. You don't interact with it directly as a bot, and it doesn't add custom functionality to your workspace out of the box. It makes it easier to automate anything you'd typically use the Slack API for, using Nexusstream workflows. 

- Automate posting updates to your team channels
- Create a bot to answer common questions
- Integrate with your existing tools and services
- And much more!

# Getting Started

## Should I use the Slack or Slack Bot app on Nexusstream?

The Slack app is the easiest and most convienent option to get started. It installs the official Nexusstream bot into your Slack workspace with just a few clicks.

However, if you'd like to use your own bot registered with the [Slack API](https://api.slack.com), you can use the [Slack Bot app](https://khulnasoft.com/apps/slack-bot) instead.

The Slack Bot requires a bot token to allow your Nexusstream workflows to authenticate as your bot. The extra set up steps allow you to list your custom bot on the Slack Marketplace, or install the bot on other workspaces as your bot's name instead of as Nexusstream.

## Accounts

1. Visit [https://khulnasoft.com/accounts](https://khulnasoft.com/accounts).
2. Click on the **Click Here To Connect An App** button in the top-right.
3. Search for "Slack" among the list of apps, and select it.
4. This will open a new window asking you to allow Nexusstream access to your Slack workspace. Choose the right workspace where you'd like to install the app, then click **Allow**.
5. That's it! You can now use this Slack account in any [actions](#workflow-actions), or [link it to any code step](/connected-accounts/#connecting-accounts).

## Within a workflow

1. [Create a new workflow](https://khulnasoft.com/new).
2. Select your trigger (HTTP, Cron, etc.).
3. Click on the **+** button below the trigger step, and search for "Slack".
4. Select the **Send a Message** action.
5. Click the **Connect Account** button near the top of the step. This will prompt you to select any existing Slack accounts you've previously authenticated with Nexusstream, or you can select a **New** account. Clicking **New** opens a new window asking you to allow Nexusstream access to your Slack workspace. Choose the right workspace where you'd like to install the app, then click **Allow**.
6. That's it! You can now connect to the Slack API using any of the Slack actions within a Nexusstream workflow.

# Troubleshooting

Please [reach out](https://khulnasoft.com/support/) to the Nexusstream team with any technical issues or questions about the Slack integration. We're happy to help!
