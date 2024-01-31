import discord from "../../discord.app.mjs";

export default {
  props: {
    discord,
    channel: {
      type: "$.discord.channel",
      appProp: "discord",
    },
    message: {
      propDefinition: [
        discord,
        "message",
      ],
    },
    threadID: {
      propDefinition: [
        discord,
        "threadID",
      ],
    },
    username: {
      propDefinition: [
        discord,
        "username",
      ],
    },
    avatarURL: {
      propDefinition: [
        discord,
        "avatarURL",
      ],
    },
    includeSentViaNexusstream: {
      propDefinition: [
        discord,
        "includeSentViaNexusstream",
      ],
    },
  },
  methods: {
    getUserInputProps(omit = [
      "discord",
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
      return `Sent via [Nexusstream](<https://khulnasoft.com/@/${workflowId}?o=a&a=discord>)`;
    },
  },
};
