import Header from './components/Header/Header';
import logo from './logo.svg';
import { Link, Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className='app-header'>
        <Header />
      </div>
      <div>
        <button>
          <Link to="/users">Go To User Page</Link>
        </button>
        <button>
          <Link to="/admins">Go To User Page</Link>
        </button>
      
      </div>
        <Outlet />
    </div>
  );
}
export default App;