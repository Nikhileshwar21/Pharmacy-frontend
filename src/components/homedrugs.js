import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import httpClient from "../http-common";
import "../App.css";

import {useCart} from "react-use-cart";



const Homedrugs = () => {

    const [drugs, setDrugs] = useState([]);

    const{addItem}=useCart();

    useEffect(() => {
       
        getalldrugsfromserver();
    }, []);

    //function to call server
    const getalldrugsfromserver = () => {
        httpClient.get("http://localhost:9092/drugs/list").then(
            (response) => {
                //success
                console.log(response.data);
                toast.success("Drugs is loaded");
                setDrugs(response.data);


            },
            (error) => {
                //error
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };

    //calling loading drugs function
    useEffect(() => {
        getalldrugsfromserver();
    }, []);

 
    return (
        <>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th> Drug Name</th>
                        <th> Quantity available</th>
                        <th>  Price</th>
                        <th> Batch Id</th>
                        <th> Expiry Date</th>
                    </tr>
                </thead>
                <tbody id="table-text">
                    {drugs.map((drugs) => (
                        <tr key={drugs.id}>
                            <td>{drugs.drugName}</td>
                            <td>{drugs.quantity}</td>
                            <td>{drugs.price}</td>
                            <td>{drugs.batchId}</td>
                            <td>{drugs.expiryDate}</td>
                        </tr>))}

                </tbody>
            </table>
        </>

    );
};
export default Homedrugs;