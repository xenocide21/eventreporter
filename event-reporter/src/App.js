import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Register from "./components/account/registration";
import Login from "./components/account/login";
import LoggedInNav from "./components/navigation/LoggedInNav"
import Navigation from "./components/navigation/navigation"
import gsPanel from './components/account/gsPanel'
import PrivateRoute from "./utils/PrivateRoute";
// import eventReport from "./components/event-report";
import eventCardList from './components/event-report/eventCardList'

import './App.css';

function App() {
    // const [searchBox, setSearchBox] = React.useState(true)
    const [users, setUsers] = React.useState()
    const isLoggedIn = localStorage.getItem('token') ? (
        <LoggedInNav />
    ) : (
        <Navigation />
    )

  return (
    <div className="App">
      <>
        {isLoggedIn}
        <Switch>
          <PrivateRoute exact path='/panel' component={gsPanel} />
          {/*<eventReport />*/}
          <Route path='/eventreport' component={eventCardList}/>
          {/*<Route path='/:id/edit' exact component={editEventReport} />*/}
          <Route path='/register' component={Register} users={users} setUsers={setUsers}/>
          <Route path='/login' component={Login} users={users} />
          <Route path='/register' component={Register} users={users} setUsers={setUsers}/>
          <Route path='/login' component={Login} users={users} />
        </Switch>
      </>
    </div>
  );
}

export default App;
