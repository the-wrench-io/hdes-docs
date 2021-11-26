
# What is theWrench?

theWrench is an open source platform developed to reduce the time and cost of developing and testing rules-centric microservices.

### Design philosophy

theWrench design is based on a minimalist approach to streamline its internal complexity and maintain focus on the areas that really matter: e.g, simplicity of use, ease of deployment and management, etc.

### Deployment model

theWrench deployment model is container-based; thus, it is well-suited to cloud environments with minimal additional effort. Today, theWrench-based services and applications have been deployed in all major cloud environments, and as it is based on Java, it runs in any environment where Java Virtual Machine (JVM) is installed.

### Creating tasks and flows

The platform comes with theWrench Composer tool, which gives the user the power of defining tasks (processes which are executed when a service is called) and creating logical links between sequences of tasks. For this, theWrench provides low-code tools for defining processes and rules using the concept of decision tables.

### Flexibility, efficiency, speed

One of theWrench’s great benefits is that users can create, edit, and test on the fly; thus, the development lifecycle can be kept in-house with significantly shorter and more simplified routes from development to production. The number of man hours required to create and test Wrench microservices is also greatly reduced, as there is no need to outsource development and testing.

What is more, users have full freedom to write and integrate into any desired system using the power of Java.

### How does theWrench achieve the creation of a microservice?

The Wrench follows a specific pattern to create a microservice: Flow, Decision Table, Service Task, and Manual Task, all of which are defined as “theWrench Assets”.

The highest level of theWrench Assets is the Flow, which is used to link other theWrench assets to tasks that, in turn, form the given process that is executed when a microservice is called.

Each of theWrench Assets is automatically version controlled and thus, can always be easily reverted back to if needed. In short, assets can be tested directly. This inbuilt testing functionality greatly speeds up the development process and encourages an incremental development approach; i.e., change, test and, if ready, deploy.

### How is theWrench different from other platforms?

* Minimalistic approach: theWrench provides UI level components to those areas where it makes sense and can be done without complexity.
* Open and extendable directly: Flow tasks are Java code, and a user can use any Java library to incorporate needed functionality. This creates transparency, since the code is visible to everyone.
* Container-based deployment model: Deployment and runtime issues are handled outside of theWrench itself.
* Open source: Using open source products gives the user licensing freedom, freedom from vendor lock-in, transparency into the code base, and much more.

---

# General Features


### Lifecycle Management

Each save triggers a new version tag, and previous tags can be revisited at any time, creating a complete record of the flow development over time from start to end. Only the current version can be edited.

### Comma Separated Values (CSV) options

Comma separated values can be uploaded as Decision Table values, and Decision Table values can also be downloaded as CSV.

### Integratability

The Wrench is written in Java and therefore, can easily be integrated into any other web application or cloud-centric environment.

### Keyboard hotkeys

Custom keyboard shortcuts are supported for faster access to common functionalities.

### Auto-complete options

Adding to and modifying assets' code is greatly simplified with auto-complete. Simply by pressing `CTRL + SPACE` at the desired location within the code, available options will appear via a dropdown menu of possibilities.

### Live testing

Using the Wrench's built-in Preview function, flows can be tested live without needing to outsource the testing or have any affect on the production version.

