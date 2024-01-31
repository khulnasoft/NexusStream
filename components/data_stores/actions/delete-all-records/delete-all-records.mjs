import app from "../../data_stores.app.mjs";

export default {
  key: "data_stores-delete-all-records",
  name: "Delete All Records",
  description: "Delete all records in your [Nexusstream Data Store](https://khulnasoft.com/data-stores/).",
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
    await this.dataStore.clear();
    $.export("$summary", "Successfully deleted all records.");
  },
};
