import React, { Component, Fragment }from 'react';

import './users.scss';
import UserCard from './user-card';
import Navbar from './navbar';

class Users extends Component {
  deleteUser = (i) => {
    this.props.deleteUser(i);
  }
  editUser = (index,e) => {
    this.props.editUser(index,e);
  }
  search = (e) => {
    this.props.search(e);
  }
  render() { 
    return ( 
      <Fragment>
        <header className="header">
          <Navbar 
            search={this.search}
          />
        </header>
        <main className="content">
          { 
            this.props.users.map( ( user , i) => {
              return <UserCard 
                        user={user} 
                        key={i}
                        index={i}
                        deleteUser={this.deleteUser}
                        editUser={this.editUser}
                      />
            })
          }
        </main>
        <footer className="footer">

        </footer>
      </Fragment>
    );
  }
}

export default Users;