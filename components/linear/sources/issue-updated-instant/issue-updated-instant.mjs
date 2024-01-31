import issueUpdatedInstant from "../../../linear_app/sources/issue-updated-instant/issue-updated-instant.mjs";
import utils from "../../common/utils.mjs";

/* eslint-disable nexusstream/required-properties-type */
/* eslint-disable nexusstream/required-properties-name */
/* eslint-disable nexusstream/required-properties-version */

export default {
  ...issueUpdatedInstant,
  ...utils.getAppProps(issueUpdatedInstant),
  key: "linear-issue-updated-instant",
  description: "Emit new event when an issue is updated (OAuth). See the docs [here](https://developers.linear.app/docs/graphql/webhooks)",
  version: "0.3.5",
};
