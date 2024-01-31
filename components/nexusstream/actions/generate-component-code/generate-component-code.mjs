import nexusstream from "../../nexusstream.app.mjs";
import { axios } from "@pipedream/platform";

export default {
  key: "nexusstream-generate-component-code",
  name: "Generate Component Code",
  description: "Generate component code using AI.",
  version: "0.0.1",
  type: "action",
  props: {
    nexusstream,
    prompt: {
      type: "string",
      label: "Prompt",
      description: "The prompt that will be sent to the AI. Try to be very specific with your prompt. For example, `Send a message to Slack`.",
    },
    app: {
      type: "string",
      label: "App",
      description: "The name of the app integration that the AI model will use as context. For example, `slack`.",
      optional: true,
    },
  },
  async run({ $ }) {
    return axios($, {
      url: "https://ai.m.nexusstream.net",
      method: "post",
      data: {
        prompt: this.prompt,
        app: this.app,
      },
    });
  },
};
