import React, { useState } from 'react'
import tshirt from "../images/tshirt.jpeg";
import bottle from "../images/bottle.jpeg";
import bag from "../images/bag.jpeg";
import uniform from "../images/unifrom.jpeg";

const card = () => {
    // contains all the products data
    const [items, setitems] = useState([
        {
            imageUrl:tshirt.src,
            title:"T-Shirt",
            price:499,
            quantity:1
        },
        {
            imageUrl:bag.src,
            title:"Bag",
            price:599,
            quantity:1
        },
        {
            imageUrl:bottle.src,
            title:"Bottle",
            price:99,
            quantity:1
        },
        {
            imageUrl:uniform.src,
            title:"Uniform",
            price:1099,
            quantity:1
        },
        
    ])

    // all the cart cart items will be put in this array
    const [cartItem, setcartItem] = useState([])

    // when user click add to cart button product will be added to cart
    const addToCart = (index) =>{
        let arr = [...items]
        let item = arr.splice(index,1); 
        [...cartItem].includes(item[0]) ? alert("Item is in cart.") : setcartItem([...cartItem,...item])
    }

    // this function will decrease the quantity of product
    const decrease = (index) =>{
        let arr = [...cartItem]
        if(arr[index].quantity > 0){
            arr[index].quantity -= 1;
            setcartItem(arr) 
        }
    }

    // this function will increase the quantity of product
    const increase = (index) =>{
        let arr = [...cartItem]
        arr[index].quantity += 1;
        setcartItem(arr) 
    }

    // this function will remove the item from cart
    const removeItem = (index) =>{
        let arr = [...cartItem]
        arr.splice(index,1)
        setcartItem(arr)
    }

    // this function returns the final amount of all product in cart
    const checkout = () =>{
        let sum = 0; 
        cartItem.map((item)=>{
            sum += item.price * item.quantity; 
        })
        return sum
    }

  return (   
    <>
        {/* this container div is get all the data from item array and display the products */}
        <div className='container'>
            {
                items.map((item,index)=>{
                    return (
                        <div className='card'>
                            <img src={item.imageUrl}/>
                            <h2>{item.title}</h2>
                            <p>Price:${item.price}</p>
                            <button onClick={()=>{
                                addToCart(index)
                            }}>Add To Shopping Cart</button>
                        </div>
                    )
                })
            }
        </div>
        <hr/>

        {/* cart div will be display at the bottom  */}
        <div className='cart'>
        <h1>My Cart</h1>
        {
            cartItem.map((item,index)=>{
                return (<div className='item'>
                            <div className='item1'>
                                <img src={item.imageUrl} />
                                <div className='item1-s'>
                                    <h3>{item.title}</h3>
                                    <p>Price: ${item.price}</p>
                                </div>
                            </div>
                            <div className='item2'>
                                <button onClick={()=>{
                                    removeItem(index)
                                }} className='removeBtn'>Remove Product</button>
                                <button onClick={()=>{
                                    decrease(index)
                                }} className='update'>-</button>
                                <p>{item.quantity}</p>
                                <button onClick={()=>{
                                    increase(index)
                                }} className='update'>+</button>
                            </div>
                        </div>)
            })
        }
        <hr/>
        <div className='totalSection'>
            <p className='price'>Total Amount : ${checkout() > 0 ? checkout() : "0"}</p>
            <button className='paymentBtn'>Proceed To Payment</button>
        </div>
    </div>
    </>
    
    
  )
}

export default card