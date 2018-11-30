#Project:Tracking Every Assignment: Progress Over Time
Codename: .sendstatus(418)
Dem Bois: Sean Jacobsma, Ben Fynan, Jorden Hordyk
##Intro
Our idea for our web app is a homework planner. Most todo lists have a system set up to allow
the addition of an item to the list, and a function to remove the item when it is done.
However, there is no way to mark when work will be done or when the assignment is planned to be finished. This is a feature that many students could benefit from, as it allows them to fully plan out their week. This will help to make all assignments are turned in on time, and if an assignment cannot be completed on time, they can let their professor know sooner than the night before. The assignments will be displayed on a weekly chart.
##Functions:
Add task
Delete task
Modify task
Complete task
Remove task from completed list

##component Structure
App component
    Weekly task list
      Daily task list
        task1 (display title)
          edit
        task2 (display title)
          edit
        ...
    Completed task list
      task1 (display title)
        I'm not done yet! (Restore task to task list)
      task2 (display title)
        I'm not done yet!
      ...
    User Form
      Add task

Much like the comments app, the edit link will take the user to a page
where they can modify, complete or delete the task

##example task object
{
  Type: ("Due date" or "Work date"),
  Day: "Friday",
  Class: "cs336",
  Title: "Project2",
  Task: "expand proposal",
  Subtask: {["larger description", 1], ["reactJS frontend", 0], ["MongoDB backend", 1]},
  Urgency: ("urgent" or "not urgent"),
  Complete: ("yes" or "no")
}

Potentially add subtask tracking where each task has a list of subtasks 
