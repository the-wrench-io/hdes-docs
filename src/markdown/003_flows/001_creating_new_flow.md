# Flows: Creating

## Quick Summary

* Flows are created by selecting `Create new asset`
* When creating a flow, inputs are defined at the top of the flow editor screen
* When in doubt, put your cursor where you wish to add/modify something, and use the shortcut `CTRL + SPACE` for available auto-complete options
  * You can create flow tasks as well as inputs with this shortcut
  
[Inputs](#inputs)  
[Creating and modifying a flow: INPUTS](#modifying)  
[Creating and modifying a flow: FLOW TASKS](#flow-tasks)  
  

---

## Overview 

There are two simple ways to create a flow:

1. By selecting `Create new asset` from the landing screen
2. By selecting `Create new asset` from the right-hand menu in theWrench Composer

Landing screen

![New flow from Create New Asset](flows/create-asset.png)  

Right-hand menu in theWrench Composer

![New flow from Create New Asset](flows/create-asset2.png)

After creating a flow, inputs need to be defined.

---

### Inputs {#inputs}

Inputs are parameters from outside the flow, as an example, data entered via a form or passed on by a service. Inputs are processed by the flow and passed on to each task which has defined them. The tasks define what kind of input parameters they require, and the flow maps these inputs into the tasks.

Inputs are defined at the top of the flow editor screen. Looking at the screenshot below, you can see several inputs, including ageOfDriver, makeOfCar, postalCode, carWeight, carPower, newClient, etc.

![Flow inputs](flows/flow-editor2.png)

When you click the preview button, you are presented with a testing form where those input IDs will appear. The testing form appears below:

![Testing form](flows/testing-form.png)

---

### Creating and modifying a flow: INPUTS {#modifying}

When you first create a flow, the editor screen is empty. You will manually add a flow description (optional), inputs, and tasks.

To start adding (and also to add/modify later), place your cursor where you wish to add something, and then press `CTRL + SPACE` to trigger a dropdown "Insert" menu of possible items to add. When it is not possible to add/modify anything at your cursor's current location, this menu will not appear, nor will it display items that cannot be added in a particular place within the code.  

![Creating and modifying a flow](flows/modifying-flow.png)

The default values you see upon creating a new input and a new task are as follows:

![Creating new inputs](flows/create-input.png)

After creating a new input, manually edit its ID to fit your needs, and be sure to specify its input type.  

---

### Creating and modifying a flow: FLOW TASKS {#flow-tasks}

Flow tasks are created in much the same way as inputs. Hit `CTRL + SPACE` to bring up the dropdown and select the type of task to add.

![Creating new tasks](flows/new-task.png)