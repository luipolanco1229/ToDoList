import React, { useContext,  useEffect } from 'react';
import {HOST_API} from "../HOST_API" 
import { Store } from "./StoreProvider"
import { Button, Card} from 'react-bootstrap';

const List = () => {

    const { dispatch, state: { todo } } = useContext(Store);
    const currentList = todo.list;

    useEffect(() => {

      fetch(HOST_API + "/todos")
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: "update-list", list })
        })
    }, [dispatch]);
  
  
    const onDelete = (id) => {
      fetch(HOST_API + "/" + id + "/todo", {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: "delete-item", id })
      })
    };
  
    const onEdit = (todo) => {
      dispatch({ type: "edit-item", item: todo })
    };
  
    const onChange = (event, todo) => {
      const request = {
        name: todo.name,
        id: todo.id,
        completed: event.target.checked
      };
      fetch(HOST_API + "/todo", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          dispatch({ type: "update-item", item: todo });
        });
    };
    const decorationDone = {
        textDecoration: 'line-through'
      };
      return <div className="table">
        <table >
        <Card>
            <Card.Body>
          <thead className = "headerTable">
            <tr>
            
              <td>ID</td>
             
              <td>Tarea</td>
              
              <td>¿Completado?</td>
              
            </tr>
          </thead>
          </Card.Body>
        </Card> 
          <tbody>
          <Card>
            <Card.Body>
          
            {currentList.map((todo) => {
              return <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
                
                 
                  <td>{todo.id}</td>
                  
                  <td>{todo.name}</td>
                  
                  <td><input type="checkbox" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)} variant="primary"></input></td>
                  
               
                
                
                  <td ><Button onClick={() => onDelete(todo.id)} variant="danger" className= "botonesDelete">Eliminar</Button></td>
                  <td><Button onClick={() => onEdit(todo)} variant="info" >Editar</Button></td>
                  
                </tr>
            })}
            
          
          </Card.Body>
        </Card> 
        </tbody>    
        </table>
      </div>
    }  

export default List;
