import app from "../digitalocean_spaces.app.mjs";
import nexusstreamS3 from "../../aws/common/common-s3.mjs";

export default {
  ...nexusstreamS3,
  props: {
    aws: app,
    bucket: nexusstreamS3.props.bucket,
  },
};
