import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoLists } from "./components/TodoLists";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoLists />
    </div>
  );
}

export default App;
