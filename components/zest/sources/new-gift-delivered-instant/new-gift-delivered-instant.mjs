import common from "../common/webhook.mjs";
import events from "../common/events.mjs";
import sampleEmit from "./test-event.mjs";

export default {
  ...common,
  key: "zest-new-gift-delivered-instant",
  name: "New Gift Delivered (Instant)",
  description: "Emit new event when a gift is physically delivered. [See the documentation](https://gifts.zest.co/admin/integrations/documentation#operation/createWebhookEndpoint)",
  version: "0.0.1",
  type: "source",
  dedupe: "unique",
  methods: {
    ...common.methods,
    getEventTypes() {
      return [
        events.GIFT_DELIVERED,
      ];
    },
    generateMeta(resource) {
      return {
        id: resource.id,
        summary: `Deliverd Gift: ${resource.name}`,
        ts: +resource.ts,
      };
    },
  },
  sampleEmit,
};
