import bash from "../../bash.app.mjs";

export default {
  name: "Run Bash Code",
  version: "0.0.2",
  key: "bash-run-bash-code",
  description: "Run any Bash in a Nexusstream step within your workflow. Refer to the [Nexusstream Bash docs](https://khulnasoft.com/docs/code/bash) to learn more.",
  props: {
    bash,
  },
  type: "action",
  methods: {},
  async run({ $ }) {
    // Placeholder action for Bash code app
  },
};
