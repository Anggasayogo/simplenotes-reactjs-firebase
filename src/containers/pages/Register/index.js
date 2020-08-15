import React,{Component} from 'react';
import './Register.css';
import fire from '../../../config/firebase';

class Register extends Component{
    state = {
        email : '',
        password : '',
    }

    handleChangetext = (el)=>{
        this.setState({
            [el.target.name] : el.target.value,
        })
    }
    handleRegisterSubmit = ()=>{
        const {email,password} = this.state
        console.log('Data before send ',email,password);
        fire.auth().createUserWithEmailAndPassword(email,password)
           .then(res =>{
               console.log(res)
           })
           .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage);
           });
    }

    render(){
        return(
            <div className="global-container">
	            <div className="card login-form shadow p-3 mb-5 bg-white rounded">
	                <div className="card-body">
                        <h3 className="card-title text-center">Register Page</h3>
		                <div className="card-text">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" className="form-control"
                                onChange={this.handleChangetext}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control" 
                                onChange={this.handleChangetext}
                                />
                            </div>
                            <button className="btn btn-primary btn-block" 
                            onClick={this.handleRegisterSubmit}>Sign in</button>
		                </div>
	                </div>
                </div>
            </div>
        )
    }
}

export default Register;