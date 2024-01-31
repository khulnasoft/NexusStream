import component from "../../../slack/actions/set-channel-purpose/set-channel-purpose.mjs";
import utils from "../../common/utils.mjs";

/* eslint-disable nexusstream/required-properties-type */
/* eslint-disable nexusstream/required-properties-name */

export default {
  ...component,
  props: utils.buildAppProps({
    component,
  }),
  key: "slack_bot-set-channel-purpose",
  description: "Change the purpose of a channel (Bot). [See docs here](https://api.slack.com/methods/conversations.setPurpose)",
  version: "0.0.2",
};
