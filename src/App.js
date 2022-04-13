import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { incNumber, decNumber } from "./Redux/Action";
import { useSelector, useDispatch } from "react-redux";



const App = () => {

  const myState = useSelector((state) => state.ChangeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid d-flex justify-content-center maindiv ">

        <nav aria-label="...">
          <ul className="pagination  ">
            <li className="page-item">
              <button type="button" onClick={()=>dispatch(decNumber())}className="btn btn-danger btn1 d-flex justify-content-center " >-</button>
            </li>
            <input type="number" className="h3 d-flex justify-content-center" value={myState} />
            <li className="page-item">
              <button type="button" onClick={()=>dispatch(incNumber())} className="btn btn-primary btn2">+</button>
            </li>
          </ul>
        </nav>
      </div>
    </>)
};

export default App;
