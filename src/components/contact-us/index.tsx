import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './styles/index.css';

interface IState {
    name: string,
    email: string,
    message: string
  }

export class Contact extends React.Component<{} , IState> {
    // const [name: string, setName: any] = useState(""): any;
    constructor(props: any) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }

    onNameChange(event: any) {
    this.setState({name: event.target.value})
    }

    onEmailChange(event: any) {
    this.setState({email: event.target.value})
    }

    onMessageChange(event: any) {
    this.setState({message: event.target.value})
    }
    
    handleSubmit(event: any) {
        event.preventDefault();

    fetch('http://localhost:3000/send',{
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })
    }

    resetForm(){
        this.setState({name: "", email: "", message: ""})
     }

    render() {
        return (
            <>
            <h1>Contact Us</h1>
                        <p>For business inquiries, please call: 0703616864<br/>
                           For engineering needs, call: 0772653001<br/>
                           For all other inquiries, please call: 0414662804 <br />
                           Or leave us a note below. We would love to hear from you!
                        </p>
                        <div className="contact-form">
                            <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                <label htmlFor="fname">
                                    <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} placeholder="Name"/>
                                </label>
                                {/* <input type="text" id="fname" name="firstname" placeholder="First Name" onChange={this.onNameChange.bind(this)}/> */}
                                {/* <label htmlFor="lname">Last Name</label>
                                <input type="text" id="lname" name="lastname" placeholder="Last Name"/> */}
                                <label htmlFor="email">
                                {/* <input type="email" id="email" name="email" placeholder="Your email"/> */}
                                    <input type="email" 
                                        className="form-control" 
                                        aria-describedby="emailHelp" 
                                        value={this.state.email} 
                                        onChange={this.onEmailChange.bind(this)} 
                                        placeholder="Email"/>
                                </label>
                                <label htmlFor="message">
                                {/* <textarea id="subject" placeholder="Please enter your message here"></textarea> */}
                                    <textarea className="form-control" rows={10} value={this.state.message} onChange={this.onMessageChange.bind(this)} placeholder="Message"/>
                                </label>
                                {/* <input type="submit" value="Submit"></input> */}
                                <label>
                                    <button className="submit-button" type="button"> Submit</button>
                                </label>
                            </form>
                        </div>
            </>
        );}
}