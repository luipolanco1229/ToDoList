import React from "react"
import StoreProvider from "./Components/StoreProvider"
import Form from "./Components/Form"
import List from "./Components/List"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <StoreProvider >
    
    <Form />
    <List />
  </StoreProvider>
}
export default App;