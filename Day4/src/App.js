// import logo from './logo.svg';
import './App.css';
import Choose from './Choose.js';
import UserLogin from './UserLogin';
import User from './User';
import VendorLogin from './VendorLogin';
import Vendor from './Vendor'
import Homepage from './Homepage';
// import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    // <Router>
    <div className="App">
      {/* <Switch>
        <Route exact path="/" component={Choose}></Route>
        <Route exact path="/VendorLogin" component={VendorLogin}></Route>
        <Route exact path="/UserLogin" component={UserLogin}></Route>
        <Route exact path="/User" component={User}></Route>
        <Route exact path="/Vendor" component={Vendor}></Route>
      </Switch> */}
      <Homepage/>
    </div>
    // </Router>
  );
}
export default App;
