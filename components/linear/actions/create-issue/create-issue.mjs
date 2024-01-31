import createIssue from "../../../linear_app/actions/create-issue/create-issue.mjs";
import utils from "../../common/utils.mjs";

/* eslint-disable nexusstream/required-properties-type */
/* eslint-disable nexusstream/required-properties-name */
/* eslint-disable nexusstream/required-properties-version */

export default {
  ...createIssue,
  ...utils.getAppProps(createIssue),
  key: "linear-create-issue",
  description: "Create an issue (OAuth). See the docs [here](https://developers.linear.app/docs/graphql/working-with-the-graphql-api#creating-and-editing-issues)",
  version: "0.4.5",
};

