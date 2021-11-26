# Decision Tables: Modifying


## Quick Summary

  [General table options](#general-options)  
  [Comma Separated Values](#csv)  
  [Evaluating with Comparison Operators](#comparison-operators)  
  [Reordering columns and rows](#reordering)  
  [Deleting columns and rows](#deleting)  
  [Simplifying a table and catching logic holes](#catch-all)  

---
  
  
### Modifying a decision table 

#### General options

Clicking on the decision table's ID in the top left corner of the screen enables you to modify the table's name, hit policy, description, and to upload Comma Separated Values (CSV) content. 

![Decision table general options](dt/dt-general-options.png)

An input column and an output column can be reversed (input column changed to output, and vice-versa) by drag and drop. For example, drag the input column over the output column, and the input will be changed to output.



#### Reordering columns and rows {#reordering}

Columns and rows can be reordered via drag and drop if they are of the same type (input rows and columns reordered with other input rows and columns, for example).

**NOTE**: If you try to reorder an input column and an output column via drag and drop, the input column will be swapped to an output column, and vice-versa, because the left side of the table is always for inputs, and the right side is always for outputs.

#### Deleting columns and rows {#deleting}

A column can be deleted by clicking on its name and selecting `delete the column`.

A row can be deleted by clicking on its row number located to its left and selecting `delete row`.

#### Simplfying a table and catching logic holes {#catch-all}

Tables can grow very large and very complex. Accounting for each case can cause the table to grow much larger than needed. The example below shows a table which matches client ages with risk multipliers. There are basically three groups of clients based on their ages:

* **Group 1**  
18-30: Risk mutliplier 1.1  

* **Group 2**  
31-40: Risk multiplier 1.3  

* **Group 3**  
41-50: Risk multiplier 1.5  
51-60: Risk multiplier 1.5  
61-70: Risk multiplier 1.5  

The decision table would appear like this:

![Decision table with 5 age brackets](dt/age-riskmultiplier.png)

Because the last three age brackets (41-50, 51-60, 61-70) of Group 3 all have the same risk multiplier, it is not needed for them to be individually laid out in the table, resulting in three rows of identical possible outputs. This creates additional complexity where it is not needed.

This can be cleaned up in two ways:

1. Leaving an input row/column without a value, resulting in this text being displayed: "No value entered, so condition is always true"
2. Setting a "catch-all" value in the input row/column.

Using the example above, we can delete rows 2, 3, and 4 completely, as their inputs all result in the same output anyway.  We can assign an output value of Risk Multiplier 1.5, representing the entirety of Group 3, and leave the input field blank. If Hit policy is set to FIRST, the table will, when tested, return either 1.1, 1.3, or 1.5 (for any value that is not within the range of 18-40).  

The table has been cleaned up and now looks like this:

![No value entered](dt/no-value-entered1.png)

The decision table will always return `true` for this row and therefore, any input which does not fall within the logic of rows 0 and 1 will be matched. In practice, this means that any integer greater than 40 will return row 2.  This functionality can be used, for example, as a default or "catch-all" setting to match all inputs that are outside of a given range.  In addition, this can be used as a setting to catch any holes in a table's calculation logic, as this row's output will be returned if an input doesn't match any specified values.  This is a useful way to simplify your tables and decrease the number of cases you need to account for while simultaneously checking your logic to ensure no gaps.  

For clarity's sake, you can also write a "catch-all" value in your table's input. In our case, a catch-all value of `>=41` has been added. This will return a Risk multiplier of 1.5 for any value it matches.

![Catch-all value entered](dt/catch-all-value1.png)

The screenshot in the following section, Testing, shows a decision table called carAge which contains three input values (two ranges and one with no value entered) and demonstrates again how you can use this "No value entered..." feature as a catch-all.
