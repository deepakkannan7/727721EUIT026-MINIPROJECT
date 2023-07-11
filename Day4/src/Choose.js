import "./Choose.css";
import {Link} from 'react-router-dom';
const Choose = () => {
  return (
      <div className="CCbdy">  
      <h1 className="Cwru">Who R U</h1>  
    <div className="Ctot">
      
        <div className="Cvendor">
            <Link to="/VendorLogin">
            <div className="Cvendimg">
            </div>
            <p className="Cvendtxt">Vendor</p>
            </Link>
        </div>
        <div className="Cuser">
            <Link to="/UserLogin">
        <div className="Cuserimg">
            </div>
            <p className="Cusertxt">User</p>
            </Link>
        </div>
    </div>
    </div>
  );
};
export default Choose;
