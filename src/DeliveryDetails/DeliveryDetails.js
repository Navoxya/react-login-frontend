import React, {useState}  from 'react';

import { scryRenderedComponentsWithType } from 'react-dom/test-utils';


import './DeliveryDetails.css';

import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../shared/util/validators';


function DeliveryDetails(){

    const [Rname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address , setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [note, setNote] = useState('');

        
  /*function handleChangeName(e)  {
    e.preventDefault();
      
    setName(e.target.value);
  };*/
     

    const handleSubmit = async (event) => {

        event.preventDefault();

    }



  /*  const handleChangeRname = (event) => {

        console.log(event.target.value);
        this.setState({ Rname : event.target.value});

    };

    const handleChangeNote = (event) => {

        console.log(event.target.value);
        this.setState({ note : event.target.value});

    };*/

        return(

            <div className = "wrapper">
                <div className = "DeliveryForm">
                    <form onSubmit={handleSubmit}>
                
                        <h1>Shipping Details</h1><br/>
                        <div>
                            <div><label> Reciver's Name</label> </div>
                            <div><input type="text" name="Rname" value={Rname} onChange={e => setName(e.target.value)} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter your name." /> </div>
                        </div>
                        <br/>
                        <div>
                            <div> <label> Email Address</label></div>
                            <div><input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}  validators={[VALIDATOR_EMAIL()]}  errorText="Please enter a valid E-mail." /></div>
                        </div>
                        <br/>
                        <div>
                            <div><label>Phone Number</label></div>
                            <div><input type="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)}/> </div>  
                        </div>
                        
                        <br/>
                        <div>
                            <div> <label>Street Address</label></div>
                            <div><input type="text" name="address" value={address} onChange={e => setAddress(e.target.value)} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter your address."/></div>
                        </div>
                        <br/>
                        <div className="address">
                            <div className="subAdd">
                                <div><label>City</label></div>
                                <div><input type="text" name="city" value={city} onChange={e => setCity(e.target.value)} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter your city."/></div>
                            </div>
                            
                            <div className="subAdd">
                                <div><label>Zip Code</label></div>
                                <div><input type="text" name="zip" value={zip} onChange={e => setZip(e.target.value)} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter your Zip Code."/></div>
                            </div>
                        </div>
                        <br/>
                        
                        <div>
                            <div> <label>Order Notes</label></div>
                            <div><textarea type="text-area" name="note" value={note} onChange={e => setNote(e.target.value)}/> </div>
                        </div>
                        <br/>
                        

                        <div><input className="btnDelivery" type="submit" value="Submit" /></div>

                    

                    </form>
                </div>

            </div>

        );

    }


export default DeliveryDetails;
