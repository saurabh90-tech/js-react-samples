import logo from './logo.svg';
import './App.css';

function formatName(user){
  return user.firstName + " " + user.lastName
}

function App() {
  const name = "John";//JSX Syntax
  const age = 23;

  const user = {
    firstName : 'John',
    lastName : 'Doe'
  };

  return (
    <div>
      <h2>Welcome to React JS</h2>
      <h1> welcome {name}</h1>
      <h2> {name} is {age} years old </h2>
      <h2> Hello {formatName(user)}</h2>
    </div>
  );
}

export default App;
