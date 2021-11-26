# What is a Flow?

## Quick Summary

* Flows define actions and processes that are to come
* They follow a specific structure containing specific elements: flow ID, description, inputs, decision tables, and flow tasks.

---

## Overview  

A flow defines the actions and processes that are to come. Think of it like a list of tasks to be completed in order to produce a result. Flows comprise the core of theWrench.  

As an example, flows can describe the steps to take to calculate a car insurance payout (result) based on certain factors such as the age of the driver, the location of the accident, and whether or not the driver was at fault.  

---

### Structure and elements of a flow 

Flows follow a certain structure, which is comprised of a number of specific elements. These elements are as follows:
* **Flow id**: A flow's unique identifier
* **Flow description**: A simple string used for explanatory purposes. Description has no bearing on any aspect of the Wrench's core functionality.  The asset's description is identified as the first line of its code block, and its text is of a blue colour.
* **Inputs**: Parameters from outside the flow, as an example, data entered via a form or passed on by a service.
* **Decision tables**: Usually resemble spreadsheets. Consist of rows which have a set of conditions and a set of actions. 
* **Flow tasks**: The individual actions to take place within the flow. Located under the **tasks** keyword in the flow editor screen.

The visual representation of a flow's structure can be seen as a series of interconnected bubbles on the right side of the flow editor screen. 

Below is an example flow as seen on the flow editor screen.

![Example flow](flows/flow.png)


