package co.com.sofka.crud.domain;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity

public class Todo {
    @Id
    @GeneratedValue
    private Long id;
    @NotEmpty (message ="No puede estar vacio")
    private String name;
    @NotNull
    private boolean completed;
    private String groupListId;

    public String getGroupListId() {
        return groupListId;
    }

    public void setGroupListId(String groupListId) {
        this.groupListId = groupListId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
