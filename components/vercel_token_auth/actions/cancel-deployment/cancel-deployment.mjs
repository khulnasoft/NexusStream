/* eslint-disable nexusstream/required-properties-name */
/* eslint-disable nexusstream/required-properties-description */
/* eslint-disable nexusstream/required-properties-version */
/* eslint-disable nexusstream/required-properties-type */
import base from "../../../vercel/actions/cancel-deployment/cancel-deployment.mjs";
import overrideApp from "../../common/override-app.mjs";

overrideApp(base);

export default {
  ...base,
  key: "vercel_token_auth-cancel-deployment",
  version: "0.0.2",
};
