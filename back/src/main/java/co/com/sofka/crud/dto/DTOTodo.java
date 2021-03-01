package co.com.sofka.crud.dto;

import co.com.sofka.crud.domain.Todo;

public class DTOTodo {
    private Long id;
    private String name;
    private boolean completed;
    private String groupListId;

    public Todo dtoTodo(){

        Todo todo = new Todo();

        todo.setId(id);
        todo.setName(name);
        todo.setCompleted(completed);
        todo.setGroupListId(groupListId);


        return todo;
    }
    public void todoDto(Todo todo){

        id = todo.getId();
        name = todo.getName();
        completed = todo.isCompleted();
        groupListId = todo.getGroupListId();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public String getGroupListId() {
        return groupListId;
    }
}
