# Flow tasks: Decision Table Tasks

## Overview

Decision table tasks are integrations into decision tables.  

Upon the creation of a new DT task, you will be prompted to assign an ID via the modal window OR search for an existing decision table.  If you type the name of a decision table in the search window but that table does not exist yet, theWrench will create a decision table for you with the ID you just entered.  

![New decision table task](flowTasks/new-dt-task.png)

Next, you can manipulate the code for your task.

![New decision table task](flowTasks/new-dt-task2.png)

* **id**: The unique identifier of the task in that specific.
* **then**: Directs the flow to the next step.  
* **ref**: Links a task in the flow with another asset (service task or decision table)
* **restful**: Deprecated. No longer in use.
* **collection**: Tells the flow whether a collection (array) of elements is coming. If set to false: a single element is to be expected. Defaults to false. 

When you create a new decision table task, you can navigate to it via the search option in the right-side menu and edit its inputs and outputs.

---

For more information on keywords, see [Glossary](#006_additional_support/001_glossary)
