import './App.css';
import AddButton from './components/AddButton';
import Header from './components/Header';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <Header/>
      <AddButton/>
      {/* <UserList/> */}
    </div>
  );
}

export default App;
