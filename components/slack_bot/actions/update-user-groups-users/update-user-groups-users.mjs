import component from "../../../slack/actions/update-user-groups-users/update-user-groups-users.mjs";
import utils from "../../common/utils.mjs";

/* eslint-disable nexusstream/required-properties-type */
/* eslint-disable nexusstream/required-properties-name */

export default {
  ...component,
  props: utils.buildAppProps({
    component,
  }),
  key: "slack_bot-update-user-groups-users",
  description: "Update the list of users for a User Group (Bot). [See docs here](https://api.slack.com/methods/usergroups.users.update)",
  version: "0.0.2",
};
