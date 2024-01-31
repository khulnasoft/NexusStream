import nexusstream from "../../nexusstream.app.mjs";

export default {
  key: "nexusstream-delete-subscription",
  name: "Delete a Subscription",
  description: "Delete a Subscription. [See Doc](https://khulnasoft.com/docs/api/rest/#delete-a-subscription)",
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
      .deleteSubscription(this.subscriptionSource, this.listenerId, this.eventName);
    response?.data?.length > 0 && $.export("$summary", "Successfully deleted Subscription");
    return response;
  },
};
