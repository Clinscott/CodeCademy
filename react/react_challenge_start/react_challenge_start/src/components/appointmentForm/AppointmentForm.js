import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

const getContactsName = () =>{
  return contacts.map((contacts) => contacts.name)
}

  return (
   <form handleSubmit={handleSubmit}>
     <label>
       <input
       type="text"
       name="title"
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
       required
       placeholder="Appointment Title">
       </input>
     </label>
     <br></br>
     <label>
       <ContactPicker 
       name="contact"
       value={contact}
       contacts={getContactsName()}
       onChange={(e)=> setContact(e.target.value)}
       placeholder="Appointment With" />
     </label>
     <br></br>
     <label>
       <input
       type="date"
       name="date"
       min={getTodayString()}
       value={date}
       onChange={(e) => setDate(e.target.value)}
       required>
       </input>
     </label>
     <br></br>
     <label>
       <input
       type="time"
       name="time"
       value={time}
       onChange={(e) => setTime(e.target.value)}
       required>
       </input>
     </label>
     <br></br>
     <input type="submit" value="Add Appointment"></input>
   </form>
  );
};
