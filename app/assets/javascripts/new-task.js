$(function() {
  var newTaskForm = $("form#new_task");

  var postTaskDataToServer = function() {
    var taskData = newTaskForm.serialize();
    var conversation = $.ajax({
      type: "POST",
      url: "/tasks",
      data: taskData
    });
    conversation.done(addTaskToList);
    conversation.fail(onFailure);
    return false;
  };

  var onFailure = function(ajaxObject){
    var htmlFromServer = ajaxObject.responseText;
    $("#errors").html(htmlFromServer);
  };

  var resetForm = function() {
    newTaskForm.find("#task_title, #task_description").val("");
    newTaskForm.find("#task_title").focus();
  };

  newTaskForm.submit(postTaskDataToServer);

  var addTaskToList = function(taskHTML) {
    var taskList = $("#incomplete_tasks_list");
    taskList.prepend(taskHTML);
    $("#errors").html("");
    resetForm();
  };
});
