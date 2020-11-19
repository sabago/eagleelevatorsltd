import * as React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

import './styles/index.css';

interface IState {
    name: string,
    email: string,
    message: string
  }
export function Contact() {
  const [state , setState] = useState({
    name:"",
    email:"",
    message:""
  });
  const [formErrors, setFormErrors] = useState({
      name: "",
      email: "",
      message: "",
  });

  const [errors, setErrors] = useState(false);
  //Email validation
  const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  // Form validation
  const formValid = ( formErrors: any, state: any ) => {
    let valid = true;
    // Validate form errors being empty
    Object.values(formErrors).forEach((val: any) => {
      val.length > 0 && (valid = false);
    });
      // Validate the form was filled out
    if(state.name.length <=3) {
      valid = false;
      formErrors.name = "Name must be at least 3 letters long";
    }
    if(typeof state.name !== "undefined"){
      if(!state.name.match(/^[a-zA-Z\d\s]+$/)){
        valid = false;
        formErrors.name = "Only letters allowed for name";
      }  
    }

    //Email
    if(state.email.length===0){
      valid = false;
      formErrors["email"] = "Email cannot be empty";
    }
    if(typeof state.email !== "undefined"){
      if(!emailRegex.test(String(state.email).toLowerCase())){
          valid = false;
          formErrors["email"] = "Email is not valid";
        }
    }  

    if(state.message.length <=10) {
      valid = false;
      formErrors.message = "Message must be at least 10 characters long";
    }     
    setFormErrors(formErrors);
    setErrors(true);  
    return valid;
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();  
    if (formValid(formErrors,state)) {
      // Set template params
      let templateParams = {
        name: state.name,
        email: state.email,
        message: state.message,
      };

      emailjs.send('service_30f5c7q', 'template_using2k', templateParams, 'user_APS0jjpht0JU7xXswZBcM');

      console.log(`
        --SUBMITTING--
        Name: ${state.name}
        Email: ${state.email}
        Message: ${state.message}
      `);

      resetForm();
    } else {
      // Handle form validation failure
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
      console.log(formErrors);
    }
  };

  // Function to reset form
  const resetForm = () => {
    setState({
      name: '',
      email: '',
      message: ''
    });
  };

  const resetErrors = () => {
    setFormErrors({
      name: '',
      email: '',
      message: ''
    });
  }

  const handleChange = (evt:any) => {
    evt.preventDefault();
    resetErrors();
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
    setErrors(false);
  };
  
  return (
    <>
      <h1>
        Contact Us
      </h1>
      <p>
        For business inquiries, please call: 0703616864<br/>
        For engineering needs, call: 0772653001<br/>
        For all other inquiries, please call: 0414662804 <br />
        Or leave us a note below. We would love to hear from you!
      </p>
      <div className="contact-form">
        <form onSubmit={handleSubmit} method="POST">
          <div>
            <input
              type="text"
              name="name"
              value={state.name}
              className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
              onChange={handleChange}
              placeholder='Name'
              autoComplete="name"
              ></input>
            {formErrors.name.length > 0 && (
              <span className='errorMessage'>{formErrors.name}</span>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={state.email}
              className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
              onChange={handleChange}
              placeholder='Email'
              autoComplete="email"
            ></input>
            {formErrors.email.length > 0 && (
              <span className='errorMessage'>{formErrors.email}</span>
            )}
          </div> 
          <div>
            <textarea 
              rows={10} 
              name="message" 
              value={state.message} 
              className={`form-control formInput ${formErrors.message.length > 0 ? 'error' : null
              }`}
              placeholder="Message" 
              onChange={handleChange}/>
                {errors && formErrors.message.length > 0 && (
                <span className='errorMessage'>{formErrors.message}</span>
                )}
          </div>  
          <input type="submit" className="submit-button"/>                                                  
        </form> 
      </div>
    </>
  );
}