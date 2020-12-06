import './App.css';
import UserListComponent from "./components/UserListComponent";

function App() {
  return (
    <div className="App" >
      <h3>Dynamic User List</h3>
      <header className="App-header" >
        <UserListComponent />
      </header>
    </div>
  );
}

export default App;
