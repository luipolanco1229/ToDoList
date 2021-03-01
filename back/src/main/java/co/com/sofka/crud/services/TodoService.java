package co.com.sofka.crud.services;

import co.com.sofka.crud.dto.DTOTodo;
import co.com.sofka.crud.repository.TodoRepository;
import co.com.sofka.crud.domain.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;


import java.util.ArrayList;
import java.util.List;

@Service
@Validated
public class TodoService {

    @Autowired
    private TodoRepository repository;

    public Iterable<DTOTodo> list(){
        List<DTOTodo> dtoList = new ArrayList<>();
         repository.findAll().forEach((todo -> {
             DTOTodo itemdto = new DTOTodo();
             itemdto.todoDto(todo);
             dtoList.add(itemdto);
         }));
        return dtoList;
    }

    public DTOTodo save( DTOTodo dtoTodo) {
        if (!dtoTodo.getName().equals("")){
            Todo todo = dtoTodo.dtoTodo();
            repository.save(todo);
            dtoTodo.todoDto(todo);
            return dtoTodo;
        }
        return  null;
    }

    public void delete(Long id){
        repository.delete(get(id).dtoTodo());
    }

    public DTOTodo get(Long id){
        DTOTodo dtoTodo = new DTOTodo();
        dtoTodo.todoDto(repository.findById(id).orElseThrow());
         return dtoTodo;
    }

}
