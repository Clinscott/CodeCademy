import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contact, setContact] = useState([]);

 const addContact = (name, number, email) =>{
   setContact([
     ...contact,
     {
       name: name,
       number: number,
       email: email
     }
   ])
 }

 const [appointment, setAppointment] = useState([]);

 const addAppointment = (title, contact, date, time) =>{
   setAppointment([
     ...appointment,
     {
       title: title,
       contact: contact,
       date: date,
       time: time
     }
   ])
 }


  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
            contact={contact}
            addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
            appointment={appointment}
            addAppointment={addAppointment}
            contact={contact} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
