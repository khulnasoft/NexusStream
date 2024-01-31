/* eslint-disable nexusstream/required-properties-name */
/* eslint-disable nexusstream/required-properties-description */
/* eslint-disable nexusstream/required-properties-version */
/* eslint-disable nexusstream/required-properties-type */
import base from "../../../gmail/actions/send-email/send-email.mjs";
import overrideApp from "../../common/override-app.mjs";

overrideApp(base);

export default {
  ...base,
  key: "gmail_custom_oauth-send-email",
  version: "0.1.1",
  props: {
    ...base.props,
    inReplyTo: {
      propDefinition: [
        base.props.gmail,
        "message",
      ],
      label: "In Reply To",
      description: "Specify the `message-id` this email is replying to.",
      optional: true,
    },
  },
};
