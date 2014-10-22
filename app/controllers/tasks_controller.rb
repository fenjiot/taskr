class TasksController < ApplicationController
  before_action :require_login

  def index
    @tasks = current_user.tasks
    @task = Task.new
    @incomplete_tasks = current_user.tasks.incomplete
    @completed_tasks = current_user.tasks.completed
  end

  def create
    @task = current_user.tasks.create(task_params)

    render @task
  end

  def update
    task = current_user.tasks.find(params[:id])
    task.update(task_params)
    redirect_to tasks_path
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :completed)
  end
end
