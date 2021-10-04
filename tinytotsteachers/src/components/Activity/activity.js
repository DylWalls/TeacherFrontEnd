import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './activity.css';

const Activity = ({user}) => {
    const [event, setEvent] = useState("");
    const [eventName, setEventName] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [eventAct, setEventAct] = useState("");
    const [eventId, setEventId] = useState("")

    const createEvent = event =>{
        console.log(event);
    }

    const updateEvent = event =>{
        console.log(event);
    }

    const deleteEvent = event =>{
        console.log(event);
    }
    

    const submitHandler = (e) => {
        e.preventDefault();
        createEvent(event)
        updateEvent(event)
        deleteEvent(event)
    }
    const createEvents = async () => {
        await axios.post(`http://localhost:5000/api/users/${user._id}/activities`, {
            eventName: eventName,
            date: date,
            location: location,
            eventAct: eventAct,
        })
        .then((res) => {
            console.log(res)
            window.location = '/seeActivities';
        })
        .catch(error => console.log(error));

    }

    const updateEvents = async () => {
        await axios.patch(`http://localhost:5000/api/users/${user._id}/activities/${user.activities._id}`, {
            eventId: eventId,
            eventName: eventName,
            date: date,
            location: location,
            eventAct: eventAct,
        })
        .then((res) => {
            console.log(res)
            window.location = '/seeActivities';
        })
        .catch(error => console.log(error));

    }

    const deleteEvents = async () => {
        await axios.delete(`http://localhost:5000/api/users/${user._id}/activities/${user.activities._id}`)
        window.location = "/seeActivities"
    }
    return(
        <div>
            {
                console.log("Teacher in render on Activity page:", user)
            }
            <div>
                <Link to='/home'>Go Home</Link>
            </div>
            <div className="create">
                <div>Create Activity</div>
                    <form onSubmit={submitHandler}>
                        <div>
                            <input type="eventName" name="Name of Event" placeholder="Name of Event" onChange ={e=> setEventName(e.target.value)}/>
                        </div>
                        <div>
                            <input type="date" name="Date" placeholder="YearMonthDay" onChange ={e=> setDate(e.target.value)}/>
                        </div>
                        <div>
                            <input type="location" name="Location of Event" placeholder="Event Location" onChange ={e=> setLocation(e.target.value)}/>
                        </div>
                        <div>
                            <input type="eventAct" name="Event Activity" placeholder="Event Activity" onChange ={e=> setEventAct(e.target.value)}/>
                        </div>
                        <div>
                            <button onClick={()=>{createEvents()}}>Create</button>
                        </div>
                    </form>
                </div>
                <div className="update">
                <div>Update Activity</div>
                    <form onSubmit={submitHandler}>
                        <div>
                            <input type="eventID" name="EventID" placeholder="Event Id" onChange ={e=> setEventId(e.target.value)}/>
                        </div>
                        <div>
                            <input type="eventName" name="Name of Event" placeholder="Name of Event" onChange ={e=> setEventName(e.target.value)}/>
                        </div>
                        <div>
                            <input type="date" name="Date" placeholder="YearMonthDay" onChange ={e=> setDate(e.target.value)}/>
                        </div>
                        <div>
                            <input type="location" name="Location of Event" placeholder="Event Location" onChange ={e=> setLocation(e.target.value)}/>
                        </div>
                        <div>
                            <input type="eventAct" name="Event Activity" placeholder="Event Activity" onChange ={e=> setEventAct(e.target.value)}/>
                        </div>
                        <div>
                            <button onClick={()=>{updateEvents()}}>Update</button>
                        </div>
                    </form>
                </div>
                <div className="delete">
                <div>Delete Activity</div>
                    <form onSubmit={submitHandler}>
                        <div>
                            <input type="eventID" name="EventID" placeholder="Event Id" onChange ={e=> setEventId(e.target.value)}/>
                        </div>                     
                        <div>
                            <input type="eventName" name="Name of Event" placeholder="Name of Event" onChange ={e=> setEventName(e.target.value)}/>
                        </div>                    
                        <div>
                            <button onClick={()=>{deleteEvents()}}>Delete</button>
                        </div>
                    </form>
                </div>
                    <div>
                        <Link to="/seeActivities">See Current Activities</Link>
                    </div>
        </div>
    )
}


export default Activity