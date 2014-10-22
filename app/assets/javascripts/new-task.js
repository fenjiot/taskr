$(function() {
  var newTaskForm = $("form#new_task");

  var postTaskDataToServer = function() {
    var taskData = newTaskForm.serialize();
    var conversation = $.ajax({ url: "/tasks", type: "POST", data: taskData });
    conversation.done(addTaskToList);
    resetForm();
    return false;
  };

  var resetForm = function() {
    newTaskForm.find("#task_title, #task_description").val("");
    newTaskForm.find("#task_title").focus();
  }

  newTaskForm.submit(postTaskDataToServer);

  var addTaskToList = function(taskHTML) {
    var taskList = $("#incomplete_tasks_list");
    taskList.prepend(taskHTML);
  };
});
