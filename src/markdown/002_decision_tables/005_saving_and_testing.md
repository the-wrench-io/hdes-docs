
# Decision Tables: Saving and Testing


## Quick Summary

* **Saving in theWrench is not automatic, and it is not global**. This means that each asset must be saved individually by the user
* Decision tables can be tested live in theWrench Composer
* Hit  policy determines how matches are returned

---

## Overview  

When saving changes in theWrench, it is important to note that **each asset must be saved individually**. Triggering a save is not a global event: a save only applies to the open asset whose save button you click. To ensure all changes are saved, navigate through all open assets and save each of them before ending a Composer session.

Decision tables can be tested at any time during their creation process, simply by entering test values in the appropriate cells.

---

## Saving changes 

Whenever there is an unsaved changed, the right side menu will display a green asterisk on the save icon. Any time important changes are made to an asset, it is the user's responsibility to save.  Keep in mind that the save function is NOT global and saves saves only the current open asset. 

Every save creates a new version, which can be viewed at the top of the window. You can scroll forward and backward for a history of changes.

---

## Testing {#hit-policy}

Testing a decision table live is easy. Simply enter a value in the field under the column name, and be sure it matches the column's type to ensure predictable results. For example, if the column's type is DECIMAL but you enter an INTEGER type, the behaviour will be unpredictable.

![Testing 1](dt/testing1.png)

Once a value has been entered to test, the decision table will return as an output any and all columns that match that input in accordance with the hit policy you have set.  In the case below, a carAge INTEGER of 4 has been entered in the input, and the table has returned two matches.

![Testing 2](dt/testing2.png)

The table returned two matches because the hit policy was set to ALL. It returned all matches. If the hit policy is set to FIRST, it will stop trying to match as soon as it finds the first match. You will thus get the following result:

![Testing 3](dt/testing3.png)
