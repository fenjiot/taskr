$(function() {

  var makeEditable = function() {
    $(this).attr("contenteditable", true).focus();
    console.log("you clicked");
  };

  var captureEdit = function(event) {
    var titleElement = $(this);

    if (event.keyCode === 13) {
      stopEdit(titleElement);

      var conversation = $.ajax({
        type: "PATCH",
        url: "tasks/" + $(this).parent().data("listId"),
        data: {task: {title: titleElement.text()}}
      });

      titleElement.highlight;

      return false;
    }
  };

  var stopEdit = function(element) {
    element.attr("contenteditable", false);
  };

  $(document).on("click", ".title", makeEditable);
  $(document).on("keydown", ".title", captureEdit);
});
