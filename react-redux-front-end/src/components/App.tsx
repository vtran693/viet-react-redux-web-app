import * as React from 'react';
// import Persons from './Persons/Persons';
// import Cockpit from './Cockpit/Cockpit';

import Home from '../containers/Home/Home';
import './App.css';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ListUsers from "../containers/ListUsers/ListUsers";

// class App extends Component {
//     state = {
//         persons : [
//             { id: 'sf341', name : 'Max', age : 28},
//             { id: 'sf346jh', name : 'Manu', age : 29},
//             { id: 'sf348gj', name : 'Viet', age : 26}
//         ],
//         otherState : 'other state',
//         showPersons: false
//     }
//
//     nameChangedHandler = (event, id) => {
//         const personIndex = this.state.persons.findIndex(p => {
//            return p.id === id;
//         });
//
//         const person = {
//             ...this.state.persons[personIndex]
//         };
//
//         // const person = Object.assign({}, this.state.persons[personIndex]);
//
//         person.name = event.target.value;
//
//         const persons = [...this.state.persons];
//         persons[personIndex] = person.name;
//         this.setState( {persons : persons} );
//
//     }
//
//     deletePersonHandler = (personIndex) => {
//         //const persons = this.state.persons.slice();
//         const persons = [...this.state.persons];
//         persons.splice(personIndex, 1);
//         this.setState( {persons: persons} );
//     }
//
//
//     togglePersonsHandler = () => {
//         const doesShow = this.state.showPersons;
//         this.setState( {showPersons : !doesShow} );
//     }
//
//     render() {
//
//
//         let persons = null;
//         if (this.state.showPersons) {
//             persons = (
//                 <div>
//                     <Persons
//                         persons = {this.state.persons}
//                         clicked = {this.deletePersonHandler}
//                         changed = {this.nameChangedHandler}
//                     />
//                 </div>
//
//             );
//
//         }
//
//
//         return (
//
//                 <div className="App">
//                     <Cockpit
//                         persons={this.state.persons}
//                         personsToggled={this.togglePersonsHandler}
//                         showPersons={this.state.showPersons}
//                     />
//                     {persons}
//                 </div>
//
//         );
//     }
// }
//
// export default App;

const app = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/usersList" component={ListUsers} />
                    <Route exact path="/" component={Home} />
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
        </div>
    )

}

export default app;