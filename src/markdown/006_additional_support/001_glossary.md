# Glossary of common terminology

When working with assets and flows, these are some of the more common terms you will come into contact with.

### Glossary of key terminology for working with Asset Elements

1. **Asset**: Synonym of Resource. There are four types of theWrench Assets: Flow, Flow Tasks, Decision Tables, and Tags.

2. **`debug value`** (Keyword) : An input’s default value that will be used when testing a flow. Can be changed at any time by editing the inputs in the flow editor window.

3. **Decision Table**: The most important Wrench asset for a general business user. Resembles an Excel-like table, wherein the left hand side of the table (blue) contains the rules you have defined, and the right hand side (purple) defines the outcome of those rules. For example, the left hand side of the table will define various ages, and the right hand side assigns a numeric value (score) to those ages.

4. **`description`** (Keyword):  Exists simply to provide a short explanation of a flow or a Decision Table. Has no effect on the ID of an asset or how the backend handles asset identification or assignment. An element's description is the first line of its code, and its text is blue.

5. **`External Data Type`**: Deprecated and need not be used.

6. **Flow**: An asset which defines the sequence of events and processes that are to take place. Visually represented as a series of interconnected bubbles and arrows indicating the direction of the processes.  Can be manipulated via simple code editing to perform operations such as creating, naming, and assigning inputs, creating Flow Tasks and Decision Tables, and managing the overall sequence of events within itself.

7. **Flow Task**: Actions written in Java with the full power of Java itself. Functions which take an input and output definition, execute a formula on these definitions, and produce an output which is the product of this formula. Can also be an integration to a third party service; for examiple, one can create a task in Jira and return the ID of that task.

8. **Hit policy**: Determines how a Decision Table “hits” (matches) inputs and assigns the according outputs. Hit policy set to FIRST means that a Decision Table will attempt to match inputs and stop trying to make matches once it finds the first matching value. Hit policy set to ALL means that a Decision Table will find and match ALL inputs that CAN be matched, and the matching will only conclude once all inputs have been tested for matches. Default Hit policy is “ALL”. **It is recommended that Hit policy be set to “FIRST”.** 

9. **Manual Task**: Task such as a form which is filled out by a human being when a specialised decision needs to be made.

10. **`next`** (Keyword): Found within a flow task, the `next` keyword will draw an arrow on the flow task visualisation diagram between the flow task in which is located and the next task directly after it. It only links the two tasks visually on this diagram, but not on the backend.  

11. **`ref`** (Keyword): Abbreviation for "Reference". Found within a flow task, it is used to link a decision table to a decision table task or a service task. After `ref`, the Referenced table's ID is written. 

12. **Resource**: Synonym of Asset.

13. **`restful`** (Keyword): Deprecated and need not be used. Do not change the default value.

14. **Service Task**: Synonym of Flow Task.

15. **Tag**: Immutable snapshot of a set of Wrench assets at a given point in time. Using tags, all previous versions / changes to a set of assets can be viewed. 

16. **`then`** (Keyword): Specifies and directs the flow to the next task.