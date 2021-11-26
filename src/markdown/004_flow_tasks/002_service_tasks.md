# Flow tasks: Service Tasks

## Quick Summary

* Service tasks are written in Java and, as such, are fully customisable and offer transparency into the code base and functionality
* When you [create a new service task](#new-task), you are presented with a blank template that you need to customise to your needs

---

## Overview

Service tasks are tasks written in Java and function either as integrations into various services or to perform a mathematical calculation to produce a output which can be passed on to the flow. They can also execute more complicated formulas; for example, summing averages that include specific rounding rules in combination with external data.  

Flow tasks are customisable and transparent because because you have access to the task itself via its code. Therefore, you can do whatever Java and [Spring](https://spring.io/) do. Also, from time to time, you may want to access services that a developer has written (how to store and retrieve data from a database, for example). In the task code, you can physically integrate the flow to these developer-specified APIs.

When new service tasks are created, the minimum required Java libraries are automatically imported. Any additional libraries you need can easily be imported manually to ensure the specific functionalities you require.

Below is a screenshot demonstrating a flow task's Java code.

![Example flow task code](flowTasks/example-flow-task-code.png)

This is the same flow task as seen on theWrench Composer side.

![Example flow task composer side](flowTasks/example-flow-task-composer.png)

---

## Creating a new Service Task {#new-task}

When you create a new asset of type Flow Task, you will be presented with a blank template that you can customise to your needs.

![New flow task](flowTasks/new-flow-task.png)

---

For more information on keywords, see [Glossary](#006_additional_support/001_glossary)
