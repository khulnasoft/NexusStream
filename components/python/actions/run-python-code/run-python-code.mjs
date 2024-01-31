import python from "../../python.app.mjs";

export default {
  name: "Run Python Code",
  version: "0.0.2",
  key: "python-run-python-code",
  description: "Write Python and use any of the 350k+ PyPi packages available. Refer to the [Nexusstream Python docs](https://khulnasoft.com/docs/code/python) to learn more.",
  props: {
    python,
  },
  type: "action",
  methods: {},
  async run({
    steps, $,
  }) {
    // Placeholder action for Python code app
  },
};
