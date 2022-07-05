import { Checkbox } from "antd"; // ~ "shared/ui/checkbox"

import { taskModel, taskLib } from "entities/task";
import * as toggleTaskModel from './model';

export type ToggleTaskProps = {
    taskId: number;
    withStatus?: boolean;
}

// resolve / unresolve
export const ToggleTask = ({ taskId, withStatus = true }: ToggleTaskProps) => {
    const task = taskModel.selectors.useTask(taskId);

    if (!task) return null;

    const status = taskLib.getTaskStatus(task);

    return (
        <Checkbox
            onClick={() => toggleTaskModel.events.toggleTask(taskId)}
            checked={task.completed}
        >
            {withStatus && status}
        </Checkbox>
    )
}
