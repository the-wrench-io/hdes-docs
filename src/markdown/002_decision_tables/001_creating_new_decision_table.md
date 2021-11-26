# Decision Tables: Creating


## Overview {#creating}

There are three ways to create a new decision table:

1. By inserting it as a flow task (`CTRL + SPACE` in the flow editor)
2. By creating a new asset either on the landing page or via the "add" icon on the right side menu.
3. Via uploading comma separated values (CSV) via the table's main options window

Upon the creation of a new decision table, you will be presented with a table consisting of one input column and one output column.

![Structure of a decision table](dt/structure-decision-table.png)

From here, you will add rows, edit column IDs, and determine data types. 

---

### Comma Separated Values (CSV) {#csv}

Decision tables can be created and populated with comma separated values in two ways:

* **Manual creation**: You can manually enter comma separated values to create columns and rows via the table's main options. Click on the table's ID in the top left of the screen to bring this modal window up, enter values, and then select `upload`. From there, input and output columns as well as data types can be assigned.
* **External service**: You can create and populated a decision table via an external service such as importing from a database.

To modify the decision table's columns, change direction of input/output, and change the data type, click the column name to bring up the modification modal window, as seen below.

![Decision table modification modal](dt/dt-modification-modal.png)

**NOTE**: "Change the header type to external" is a deprecated function.