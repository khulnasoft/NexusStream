import app from "../../data_stores.app.mjs";

export default {
  key: "data_stores-list-keys",
  name: "List keys",
  description: "List all keys in your [Nexusstream Data Store](https://khulnasoft.com/data-stores/).",
  version: "0.0.2",
  type: "action",
  props: {
    app,
    dataStore: {
      propDefinition: [
        app,
        "dataStore",
      ],
    },
  },
  async run ({ $ }) {
    const keys = await this.dataStore.keys();
    if (keys.length > 0) {
      $.export("$summary", `Found ${keys.length} key(s).`);
    } else {
      $.export("$summary", "No keys found.");
    }
    return keys;
  },
};
