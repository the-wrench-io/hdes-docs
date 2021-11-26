# Decision Tables: Hit policy

## Quick Summary

* Hit policy determines how matches are returned
* Hit policy options can be found by clicking on the decision table name in the top left corner of the window.
* Hit policy defaults to "ALL" but it is recommended to set it to "FIRST".

---

## Overview  

The hit policy is a rule that defines how matching rows are collected. There are two possible settings:

* **FIRST**: The first matching row will be returned and the matching process will be terminated.
* **ALL**: All matching rows will be returned, possibly resulting in multiple matches.

**The hit policy defaults to ALL but it is recommended to set it to FIRST.** This will need to be done with each individual decision table, as this does not apply globally.  

The hit policy option can be found in the table's main options menu by clicking the table's ID in the top left of the screen.

[More examples on how hit policy is affected by ALL vs FIRST](#002_decision_tables/005_saving_and_testing/hit-policy)

---

### Navigate to Hit Policy

Click the decision table's name in the upper left corner: "jmTest"

![Navigate to hit policy modal](dt/hit-policy1.png)

Modify if needed in the options window

![Modify hit policy](dt/hit-policy2.png)
