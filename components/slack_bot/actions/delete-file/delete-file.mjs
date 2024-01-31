import component from "../../../slack/actions/delete-file/delete-file.mjs";
import utils from "../../common/utils.mjs";

/* eslint-disable nexusstream/required-properties-type */
/* eslint-disable nexusstream/required-properties-name */

export default {
  ...component,
  props: utils.buildAppProps({
    component,
  }),
  key: "slack_bot-delete-file",
  description: "Delete a file (Bot). [See docs here](https://api.slack.com/methods/files.delete)",
  version: "0.0.2",
};
