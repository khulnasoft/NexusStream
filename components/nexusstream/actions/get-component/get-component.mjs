import nexusstream from "../../nexusstream.app.mjs";

export default {
  key: "nexusstream-get-component",
  name: "Get Component",
  description: "Get info for a published component. [See docs](https://khulnasoft.com/docs/api/rest/#get-a-component)",
  version: "0.1.0",
  type: "action",
  props: {
    nexusstream,
    componentKey: {
      propDefinition: [
        nexusstream,
        "componentKey",
      ],
    },
    globalRegistry: {
      type: "boolean",
      label: "Nexusstream Registry",
      description: "Defaults to `true`. If set to `true`, this will fetch component data from the public Nexusstream registry. Set to `false` to search your private published components.",
      optional: true,
      default: true,
    },
  },
  async run({ $ }) {
    const { data } = await this.nexusstream.getComponent(this.componentKey, this.globalRegistry);

    if (data) {
      $.export("$summary", `Succesfully fetched ${this.componentKey}`);
      return data;
    }

    console.log(`${this.componentKey} was not found`);
  },
};
