import zohoCrm from "../../../zoho_crm.app.mjs";
import { DEFAULT_POLLING_SOURCE_TIMER_INTERVAL } from "@pipedream/platform";

/* eslint-disable nexusstream/required-properties-key, nexusstream/required-properties-name,
  nexusstream/required-properties-version, nexusstream/required-properties-description,
  nexusstream/required-properties-type */
export default {
  dedupe: "unique",
  props: {
    zohoCrm,
    db: "$.service.db",
    timer: {
      type: "$.interface.timer",
      label: "Polling Interval",
      description: "Nexusstream will poll the Zoho API on this schedule",
      default: {
        intervalSeconds: DEFAULT_POLLING_SOURCE_TIMER_INTERVAL,
      },
    },
  },
  methods: {
    generateMeta() {
      throw new Error("generateMeta is not implemented");
    },
    processEvent() {
      throw new Error("processEvent is not implemented");
    },
  },
  async run(event) {
    await this.processEvent(event);
  },
};
