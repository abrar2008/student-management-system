import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import firebase from '../firebase/firebase';

export default class Create extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('students');
        this.state = {
          name: '',
          fathername: '',
          nic: '',
          dob:'',
          contact: '',
          address: '',
          email:'',
        };
      }
      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const { name, fathername, nic, dob, contact, address ,email} = this.state;
    
        this.ref.add({
          name,
          fathername,
          nic,dob,
          contact,
          address,
          email
        }).then((docRef) => {
          this.setState({
            name: '',
            fathername: '',
            nic: '',
            dob:'',
            contact: '',
            address: '',
            email:''
          });
         
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      }
    
    render() {
        const { name, fathername, nic,dob, contact, address, email } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Student Name" />
              </div>
              <div class="form-group">
                <label for="fathername">Father's Name:</label>
                <input type="text" class="form-control" name="fathername" value={fathername} onChange={this.onChange} placeholder="Father's Name" />
              </div>
              <div class="form-group">
                <label for="nic">NIC:</label>
                <input type="text" class="form-control" name="nic" value={nic} onChange={this.onChange} placeholder="NIC" />
              </div>
              <div class="form-group">
                <label for="dob">Date Of Birth:</label>
                <input type="text" class="form-control" name="dob" value={dob} onChange={this.onChange} placeholder="Date Of Birth" />
              </div>
              <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" class="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div class="form-group">
                <label for="contact">Contact Number:</label>
                <input type="text" class="form-control" name="contact" value={contact} onChange={this.onChange} placeholder="Contact" />
              </div>
              
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email " />
              </div>
              
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
            </div>

        );
    }
}
