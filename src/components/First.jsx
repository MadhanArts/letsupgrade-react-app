import React, { Component } from 'react';
import Card from './Card';

class First extends Component {
    state = { 
        users: [],
        filteredUsers: []
     }

     componentDidMount = () => {
         fetch("https://jsonplaceholder.typicode.com/users")
         .then(response=>response.json())
         .then((users) => {
             console.log(users);
             this.setState({users:users});
             this.setState({filteredUsers:users});
         })
         .catch(err=>console.log(err));
     }

     searchByName = (name) => {
         let tempUsers = this.state.users.filter((user)=>{
             return user.name.toLowerCase().includes(name.toLowerCase());
         });

         this.setState({filteredUsers: tempUsers});
     }

     searchByCity = (city) => {
        let tempUsers = this.state.users.filter((user)=>{
            return user.address.city.toLowerCase().includes(city.toLowerCase());
        });

        this.setState({filteredUsers: tempUsers});
     }

    render() { 
        return ( 
            <div className="container">
                <div>
                    <input type="search" placeholder="Search by Name" onChange={(event) => {this.searchByName(event.target.value)}} />
                    <input type="search" placeholder="Search by City" onChange={(event) => {this.searchByCity(event.target.value)}} />
                </div>
                {this.state.filteredUsers.map((user, index) => {
                    return <Card user={user} key={index} />;
                })}
            </div>
         );
    }
}
 
export default First;