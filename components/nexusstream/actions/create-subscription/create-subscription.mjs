import nexusstream from "../../nexusstream.app.mjs";

export default {
  key: "nexusstream-create-subscription",
  name: "Create a Subscription",
  description: "Create a Subscription. [See Doc](https://khulnasoft.com/docs/api/rest/#subscriptions)",
  version: "0.1.0",
  type: "action",
  props: {
    nexusstream,
    subscriptionCategory: {
      propDefinition: [
        nexusstream,
        "subscriptionCategory",
      ],
    },
    subscriptionSource: {
      propDefinition: [
        nexusstream,
        "subscriptionSource",
        (c) => ({
          subscriptionCategory: c.subscriptionCategory,
        }),
      ],
    },
    eventName: {
      propDefinition: [
        nexusstream,
        "eventName",
      ],
    },
    listenerId: {
      propDefinition: [
        nexusstream,
        "listenerId",
      ],
    },
  },
  async run({ $ }) {
    const response = await this.nexusstream
      .subscribe(this.subscriptionSource, this.listenerId, this.eventName);
    response?.data?.length > 0 && $.export("$summary", "Successfully created Subscription");
    return response;
  },
};
