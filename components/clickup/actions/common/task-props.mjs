/* eslint-disable nexusstream/props-description */
/* eslint-disable nexusstream/props-label */
import common from "./list-props.mjs";

export default {
  props: {
    ...common.props,
    listId: {
      ...common.props.listId,
      optional: true,
    },
    useCustomTaskIds: {
      propDefinition: [
        common.props.clickup,
        "useCustomTaskIds",
      ],
    },
    authorizedTeamId: {
      propDefinition: [
        common.props.clickup,
        "authorizedTeamId",
      ],
    },
    taskId: {
      propDefinition: [
        common.props.clickup,
        "tasks",
        (c) => ({
          listId: c.listId,
          useCustomTaskIds: c.useCustomTaskIds,
        }),
      ],
      description: "To show options please select a **List** first",
    },
  },
};
