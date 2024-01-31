import component from "../../../slack/actions/get-file/get-file.mjs";
import utils from "../../common/utils.mjs";

/* eslint-disable nexusstream/required-properties-type */
/* eslint-disable nexusstream/required-properties-name */

export default {
  ...component,
  props: utils.buildAppProps({
    component,
  }),
  key: "slack_bot-get-file",
  description: "Return information about a file (Bot). [See docs here](https://api.slack.com/methods/files.info)",
  version: "0.0.2",
};
