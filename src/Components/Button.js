 import React,{useState} from 'react';
 import axios from 'axios';
 const Button =()=>{
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [product, setProducts] = useState('');
    const [price, setPrice] = useState('');

    const submitHandler =(e)=>{
        e.preventDefault();
        const data ={
            Fname:fname,
            Lname:lname,
            Product:product,
            Price:price
        }
        axios.post('https://sheet.best/api/sheets/b5d412d2-22d9-48e7-9172-63eea89f32fc', data).then((response)=>{
            console.log(response);
        })
        setFname('');
        setLname('');
        setProducts('');
        setPrice('');
    }
    return(
        <div className="head">
          <div className="form">
            <h4 className="text-center text-light my-2">Please filled details</h4>
            <form outoComplete="of" onSubmit={submitHandler}>
           <input type="text" placeholder="Enter First Name" onChange={(e)=>setFname(e.target.value)} value={fname}/><br/>
           <input type="text" placeholder="Enter Last Name" onChange={(e)=>setLname(e.target.value)} value={lname}/><br/>
           <input type="text" placeholder="Enter Products" onChange={(e)=>setProducts(e.target.value)} value={product}/><br/>
           <input type="text" placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)} value={price}/><br/>
           <button type="submit">Submit</button>
           </form>
         </div>
        </div>
    )
 }
 export default Button;