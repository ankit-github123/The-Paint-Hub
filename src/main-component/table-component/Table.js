import React from 'react';
import UserTableRow from "./UserTableRow"
import './styles.css';

export default class App extends React.Component {
    state = { users: null }
  
    componentDidMount() {
      fetch('https://randomuser.me/api/1.1/?results=15')
        .then(response => response.json())
        .then(data => { this.setState({users: data.results}) });
    }
  
    render() {
      const { users } = this.state;
      const isLoading = users === null;
      return (
        <main>
          <div className="table-container">
            <div className="uk-overflow-auto">
              <table className="uk-table uk-table-hover uk-table-middle uk-table-divider" style={{width:"100%"}}>
                <thead>
                  <tr>
                    <th className="uk-table-shrink" />
                    <th className="uk-table-shrink" />
                    <th className="uk-table-shrink centerAlign">S.no</th>
                    <th className="centerAlign" >Cat</th>
                    <th className="centerAlign" >Customer Name</th>
                    <th className="centerAlign" >Address</th>
                    <th className="centerAlign" >Contact No</th>
                    <th className="centerAlign" >No of Warehouse</th>
                    <th className="centerAlign" >Warehouse Name</th>
                    <th className="centerAlign" >Area</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading
                    ? <tr><td colSpan={6} className="uk-text-center"><em className="uk-text-muted">Loading...</em></td></tr>
                    : users.map((user, index) =>
                        <UserTableRow key={index} index={index + 1} user={user}/>
                      )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </main>
      );
    }
  }
  