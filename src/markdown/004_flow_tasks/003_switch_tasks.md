
# Flow tasks: Switch Tasks

## Overview

A switch task is a set of conditions that can be considered as "cases". Each case has an expression. Only one of these cases is chosen, and the flow execution is routed to only one singular following task.

Switch tasks are signified by a diamond shape in the flow diagram.

Below is an example of a switch task's code.  This task, clientType, will split the flow based on the outcome of the input newClient. If newClient evaluates to TRUE, the flow will move to the next task, a decision table task with ID newClientBonus. If newClient evaluates to FALSE, the flow will move to the decision table task with ID of clientBonus.

![Example switch task](flowTasks/example-switch-task.png)

This is an example of the graphical representation of a different switch task:

![Example switch task](flowTasks/switch-task2.png)

---

For more information on keywords, see [Glossary](#006_additional_support/001_glossary)

