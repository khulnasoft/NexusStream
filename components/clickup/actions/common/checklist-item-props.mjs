/* eslint-disable nexusstream/props-description */
/* eslint-disable nexusstream/props-label */
import common from "./checklist-props.mjs";

export default {
  props: {
    ...common.props,
    checklistId: {
      ...common.props.checklistId,
      optional: true,
    },
    checklistItemId: {
      propDefinition: [
        common.props.clickup,
        "checklistItems",
        (c) => ({
          taskId: c.taskId,
          checklistId: c.checklistId,
          useCustomTaskIds: c.useCustomTaskIds,
          authorizedTeamId: c.authorizedTeamId,
        }),
      ],
      description: "To show options please select a **Task and Checklist** first",
    },
  },
};
