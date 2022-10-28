import React from 'react'
import {useCart} from "react-use-cart";
import {Navigate,useNavigate} from "react-router-dom";
import AuthService from "../services/auth.service";
import {Link} from 'react-router-dom';
const Cart = () => {
  const Navigate=useNavigate();


    
     const currentUser=AuthService.getCurrentUser();

        
          console.log(currentUser.id);
    
  


  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } =useCart();
  if(isEmpty) return <h1 className="text-center"> Your cart is empty </h1>

let p="http://localhost:9094/pgredirect/"+currentUser.id+"/"+cartTotal;

  return (

    
    <section className="py-4 container">
      
   
    <div className="row justify-content-center">
      <div className="col-12">
      

        <h5>Cart({totalUniqueItems}) total Items:({totalItems}) </h5>
        <table className="table table-light table-hover m-0">
          <tbody>
        {items.map((item,index)=> {
          return(
          <tr key={index}>
          <td></td>
          <td>{item.drugName}</td>
          <td>{item.price}</td>
          
          <td>
            <button className="btn btn-info ms-2"
            onClick={()=>updateItemQuantity(item.id,item.quantity-1) }>-</button></td>
            <td> {item.quantity}</td>
            <td>
            <button className="btn btn-info ms-2"
             onClick={()=>updateItemQuantity(item.id,item.quantity+1) }>+</button></td>
             <td>
            <button className="btn btn-danger ms-2"
             onClick={()=>removeItem(item.id) }>Remove item </button>
          </td>
          </tr>
          )
           

        })}
        </tbody>
        </table>
      </div>

      <div className="col-auto ms-auto">
        <h2>Total Price : Rs.{cartTotal}</h2>

      </div>

      <div className="col-auto">

      
        <button className="btn btn-danger m-2"
        onClick={()=>emptyCart()}

        >Clear Cart</button>
        <button className="btn btn-primary m-2"
        onClick={(e)=>{
          window.open(p);
          window.location.href="/";
          
          
  

          ///Navigate("/http://localhost:9094/pgdirect/"+cartTotal);
        }}>Buy Now</button>

                


      </div>
  
    </div>
    </section>
  );
}

export default Cart;

