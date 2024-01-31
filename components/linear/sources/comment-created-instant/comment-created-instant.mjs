import commentCreatedInstant from "../../../linear_app/sources/comment-created-instant/comment-created-instant.mjs";
import utils from "../../common/utils.mjs";

/* eslint-disable nexusstream/required-properties-type */
/* eslint-disable nexusstream/required-properties-name */
/* eslint-disable nexusstream/required-properties-version */

export default {
  ...commentCreatedInstant,
  ...utils.getAppProps(commentCreatedInstant),
  key: "linear-comment-created-instant",
  description: "Emit new event when a new comment is created (OAuth). See the docs [here](https://developers.linear.app/docs/graphql/webhooks)",
  version: "0.1.5",
};
