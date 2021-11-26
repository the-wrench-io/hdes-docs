# What you're going to learn

While you go through this guide, you will be presented with situations which will familiarise you with the following:

* Pre-writing and thinking strategies for organising your flow before beginning to compose it
* The visual elements of a flow on theWrench Composer side
* How to create a new flow
* How to create and modify a flow asset
* How to create and modify a decision table
* How to create and modify inputs and outputs
* How to test decision tables and the flow itself  

---

# Effective logical thinking in the context of a flow

It is worth mentioning that the most important part of creating a flow is forethought and metacognition. Think about your own thinking: How do you organise your thoughts? How can those thoughts be translated to theWrench in terms of the composition and evaluation of a microservice?  Before anything else, organise business process content, as a flow, into logical groups in the form of flow tasks. This will simplify the flow-building process.  

Think about the flow tasks, of what they will be comprised, where that information will come from, and in what order it would make sense for them to appear.  In the carInsurancePricer example you will see in this guide, our goal is to calculate a car insurance price offer for clients.  Thinking through, it makes sense to determine on what this discount is based and how we will collect this information to direct the flow based on what we collect. 

Take this situation as an example: We know that the driver's age, the car's make and power-to-weight ratio, and the postal code where the driver lives will all factor into the final price offer whether or not a client is new or previously-existing. Therefore, it makes sense that making a price differentiation between a new and an existing client should be done after we have collected the basic information that we need to collect from every client regardless of whether he/she is new or existing.  However, none of this matters to our process if the driver has had too many accidents over the last twelve months, so we should filter out such clients at the beginning of our flow and go straight to the end, ultimately resulting in declining a price offer to the high-risk client.

When building a flow, it is helpful to build in stages:

* Start with the inputs you will use.
* Build flow tasks to create the "outline" of your flow and direct your thoughts. It does not matter yet what kind of decision tables or Java code will be behind those tasks, but it is useful to get your larger ideas down first. This will also help you understand how these tasks are related/connected to each other before you build their content.
* Fill in the flow tasks with the additional required information: For example, if you have already created three decision table tasks but have not yet given those tables functionality, or if you have not yet linked your tasks via the `then:` keyword, do it now that you have a fuller picture of how the flow fits together. 
* Test when possible to be sure your flow is working in the way you expect.