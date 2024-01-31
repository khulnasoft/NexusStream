import component from "../../../slack/actions/create-channel/create-channel.mjs";
import utils from "../../common/utils.mjs";

/* eslint-disable nexusstream/required-properties-type */
/* eslint-disable nexusstream/required-properties-name */

export default {
  ...component,
  props: utils.buildAppProps({
    component,
  }),
  key: "slack_bot-create-channel",
  description: "Create a new channel (Bot). [See docs here](https://api.slack.com/methods/conversations.create)",
  version: "0.0.2",
};
