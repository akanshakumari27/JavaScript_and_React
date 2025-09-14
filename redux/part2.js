{* 
  OverView of Designing ToDo App
" Store "
todo -> id, task, isDone

" Actions " (object)
Add a Todo, Mark as Done, Delete a Todo

## example of "Add a Todo" Object ##
{
  type: "ADD_TODO",
  payload: "write code"  //payload stores the content, which we want to add 
}
// OR in payload, we can store it's id too etc
{
  type: "Delete",
  payload: '768'  //id of Task, which we want to Delete
} 
  *}
