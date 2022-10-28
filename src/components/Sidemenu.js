import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import './Sidemenu.css';


const Sidemenu=()=>{
    return(
        <div className="side">
        <ListGroup>
            <Link className="list=group-item list-group-item-action " tag="a" to="/" action>
                Home
                </Link>
            <Link className="list=group-item list-group-item-action " tag="a" to="/viewdrugs" action>
                View Drugs
            </Link>
            <Link className="list=group-item list-group-item-action " tag="a" to="#!" action>
                About
            </Link>
            <Link className="list=group-item list-group-item-action " tag="a" to="#!" action>
                Contact
            </Link>
        </ListGroup>
        </div>
    );
}; 
export default Sidemenu;