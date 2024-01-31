import discordWebhook from "../discord_webhook.app.mjs";

/* eslint-disable nexusstream/required-properties-key, nexusstream/required-properties-name,
  nexusstream/required-properties-version, nexusstream/required-properties-description */
export default {
  type: "action",
  props: {
    discordWebhook,
    message: {
      propDefinition: [
        discordWebhook,
        "message",
      ],
    },
    threadID: {
      propDefinition: [
        discordWebhook,
        "threadID",
      ],
    },
    username: {
      propDefinition: [
        discordWebhook,
        "username",
      ],
    },
    avatarURL: {
      propDefinition: [
        discordWebhook,
        "avatarURL",
      ],
    },
    includeSentViaNexusstream: {
      type: "boolean",
      optional: true,
      default: true,
      label: "Include link to workflow",
      description: "Defaults to `true`, includes a link to this workflow at the end of your Discord message.",
    },
  },
  methods: {
    getUserInputProps(omit = [
      "discordWebhook",
    ]) {
      return Object.keys(this)
        .filter((k) => typeof this[k] !== "function" && !omit.includes(k))
        .reduce((props, key) => {
          props[key] = this[key];
          return props;
        }, {});
    },
    appendNexusstreamText(message) {
      let content = message;
      if (typeof content !== "string") {
        content = JSON.stringify(content);
      }
      content += `\n\n${this.getSentViaNexusstreamText()}`;
      return content;
    },
    getSentViaNexusstreamText() {
      const workflowId = process.env.NEXUSSTREAM_WORKFLOW_ID;
      // The link text is a URL without a protocol for consistency with the "Send via link" text in
      // Slack messages
      const linkText = `khulnasoft.com/@/${workflowId}?o=a&a=discord_webhook`;
      const link = `https://${linkText}`;
      return `Sent via [${linkText}](<${link}>)`;
    },
  },
};
