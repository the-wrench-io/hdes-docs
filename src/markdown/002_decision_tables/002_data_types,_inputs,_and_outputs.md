# Decision Tables: Data types, inputs, and outputs 


## Quick Summary

* theWrench accepts 7 data types and 5 comparison operators
* Click the cell of the row you wish to modify to bring up an options window
* Values can be entered as a range or as a single value using comparison operators
* **Square brackets** `[ ]` indicate that a value is included in a range, and **round parentheses** `( )` indicate that a value is not included in a range.

---

## Overview  

This page will go over the data types that theWrench works with, as well as demonstrate basic operations with inputs, outputs, and logical operators.

[Accepted Data Types](#data-types)  
[Working with inputs](#working-with-inputs)  
[Working with outputs](#working-with-outputs)  
[Evaluating with comparison operators](#comparison-operators)

---


### Accepted data types {#data-types}

Decision tables accept the following:

* **DATE**: Numeric input following the pattern of dd.mm.yyyy
* **DECIMAL**: Follows Java specification for BigDecimal. [See Java specification for BigDecimal](https://docs.oracle.com/javase/7/docs/api/java/math/BigDecimal.html)
* **STRING**: Text, numbers, symbols
* **DATE_TIME**: Numeric input following the pattern of dd.mm.yyyy, --:--
* **BOOLEAN**: True or false
* **LONG**: Follows Java specification for Long. [See Java specification for Long](https://docs.oracle.com/javase/7/docs/api/java/lang/Long.html)
* **INTEGER**: Numeric value without decimal points

---

### Working with inputs {#working-with-inputs}

The input column is always positioned on the left of the table. Input columns are indicated by the colour blue. Each input column handles only one input type.

**Creating inputs**

Upon clicking **Add new input**, a new input column will be created and its header must then be defined.  

![New input](dt/new-input.png)

Upon clicking **Add new row**, a new row will appear and the input criteria can then be defined.

![New row](dt/new-row.png)

**Modifying input column**

To modify the input column, click on its header to bring up the options modal window.

From here, you can change the input column's name, data type, and direction. If direction is changed to **OUT**, this column becomes and output column, moves to the right side of the table, and turns purple.

![Modifying input column](dt/modifying-inputs.png)

**Expression** can be used for a mass operation, especially in the context of comma separated value imports. For example, if you create a simple decision table via the Wrench's CSV import functionality, you will see something resembling the following:

**Creating a table via Comma Separated Values**:

You can also create a decision table by pasting CSV data.

![Creating CSV](dt/csv1.png)

**The resulting decision table**:

![Creating CSV](dt/csv2.png)

This decision table has no functionality associated with it; it is simply a collection of values with no calculations and no output. Adding functionality to each row could easily become time-consuming, and this is where the Expression field is useful.

To give the column functionality and/or re-assign it as an output column, click its header. In the following example, we are modifying column1 by changing its ID, input type, adding an Expression, and setting that Expression to IN.

![Adding an expression IN](dt/csv-expression.png)

After this change, the table looks like this:

![Table with Expression set to IN](dt/table-with-expression.png)

To modify the row to define how and against what they will be evaluated, click in the cell of the row you wish to modify to bring up the options modal window. 

Values can be evaluated with comparison operators or as a range.

### Evaluating with comparison operators {#comparison-operators}

**Evaluating single inputs**

Single inputs can be evaluated against a single value using comparison operators.

![Comparison operators](dt/comparison-operators1.png)

You may choose between the following comparison operators:

`=`: Equal to  
`<`: Less than  
`<=`: Less than or equal to  
`>`: Greater than  
`>=`: Greater than or equal to  

The Wrench follows Java specifications for comparison operators. See [Java specification for comparison operators](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html)

**Evaluating with a range**

Values can be evaluated according to whether they fall into a range.

![Range input](dt/range2.png)

**Square brackets** indicate that a value is included in a range, and **round parentheses** indicate that a value is not included in a range.

A range may have one of its numbers included while the other is not included.  

![Setting a range](dt/range1.png)

---

### Working with outputs {#working-with-outputs}

The output column is always positioned on the right of the table. Output columns are indicated by the colour purple. Each output column handles only one output type.  

**Modifying outputs**

Options to change the output column name, data type, output-to-input swapping, and deletion of the column itself can be accessed by clicking on the column header to bring up the options modal.




