import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/get-users';
import { deleteUser , editUser , search } from '../actions/user-actions';
import Users from './users';

function date (){
  let today = new Date();
  let h = today.getFullYear();
  let m = today.getMonth()+1;
  let s = today.getDate();
  console.log(h + "/" + m + "/" + s)
}
date();
class App extends Component {
  
  componentDidMount() {
    this.props.getUsers();
  }
  deleteUser = (i) => {
    this.props.deleteUser({
      users: this.props.users ,
      index: i
    });
  }
  editUser = (index,e) => {
    this.props.editUser({ 
      index ,
      users: this.props.users ,
      value: e.target.value
    });
  }
  search = (e) => {
    this.props.search({
      users: this.props.users ,
      value: e.target.value
    })
  }



  render() { 
    
    return ( 
      
      this.props.users 
      ? <Users 
          users={!this.props.filteredUsers ? this.props.users : this.props.filteredUsers}
          deleteUser={this.deleteUser}
          editUser={this.editUser}
          search={this.search}
        />
      : null
    );
    
  }
}

const mapStateToProps = state => ({
  users: state.state.users,
  filteredUsers: state.state.filteredUsers
});

const mapDispatchToProps = {
  getUsers ,
  deleteUser ,
  editUser ,
  search
};

export default connect(mapStateToProps, mapDispatchToProps)(App);