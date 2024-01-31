import component from "../../../slack/actions/update-message/update-message.mjs";
import utils from "../../common/utils.mjs";

/* eslint-disable nexusstream/required-properties-type */
/* eslint-disable nexusstream/required-properties-name */

export default {
  ...component,
  props: utils.buildAppProps({
    component,
    omitProps: [
      "as_user",
    ],
  }),
  key: "slack_bot-update-message",
  description: "Update a message (Bot). [See docs here](https://api.slack.com/methods/chat.update)",
  version: "0.0.2",
};
