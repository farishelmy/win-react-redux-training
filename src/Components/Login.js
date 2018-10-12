import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {login} from '../actions/authAction'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Login extends Component {
  
  userAuth=(e)=>{
    e.preventDefault()   
    // const inptName = e.target.username.value
    // const inptPwd = e.target.password.value

    // console.log(inptName)
    // console.log(inptPwd)

    const loginObj={       
        username:  e.target.username.value,
        password: e.target.password.value,
        repository_id:'repo3',
        language_id:'en_US'
    }
    
this.props.login(loginObj)
  }

  render() {
    const {isAuth}=this.props.session
    return (
      <div className={isAuth?"d-none":""}>
         <Form inline onSubmit={this.userAuth}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email:</Label>
          <Input type="text" name="username" id="username"  placeholder="something@idk.cool" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password:</Label>
          <Input type="password" name="password" id="password" placeholder="don't tell!" />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
      </div>
    )
  }
}

Login.propTypes={
  session: PropTypes.object.isRequired,
  login : PropTypes.func.isRequired
  }
  const mapStateToProps= state =>({
  session:state.session
  })
  export default connect(mapStateToProps,{login})(Login)
