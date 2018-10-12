import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Button,
    DropdownItem } from 'reactstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout, isAuth} from '../actions/authAction'
import Login from '../Components/Login'

class NavigationBar extends Component {

    logoutBtn=(e)=>{
        e.preventDefault()   
        const {user:{bio_access_id:bId}}=this.props.session
        this.props.logout({bio_access_id:bId})
    }  

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
  render() {
    const {isAuth,user:{stakeholder_name:name}} = this.props.session
    return (
      <div>
         <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{name===undefined?'ReactStrap':name}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <Login/>         
              <NavItem>
                <Button className={isAuth?'':'d-none'} onClick={this.logoutBtn} >LogOut</Button>
              </NavItem>                   
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

NavigationBar.propTypes={
    session: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
    }
    const mapStateToProps= state =>({
    session:state.session
    })
    export default connect(mapStateToProps,{logout})(NavigationBar)