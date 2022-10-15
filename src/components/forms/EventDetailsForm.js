import React from 'react'

const EventDetailsForm = () => {
  return (
    <article>
        <form>
            <div>
                <label>Event name</label>
                <input type='text'/>
                <label>URL</label>
                <input type='text'/>
                <label>Event type</label>
                <input type='text'/>
            </div>
            <div>
                <h2>Location</h2>
                <label>Location name</label>
                <input type='text'/>
                <label>Location address</label>
                <input type='text'/>
            </div>
            <div>
                <h2>Dates</h2>
                <label>Date time</label>
                <input type='text'/>
                <label>Date start</label>
                <input type='text'/>
            </div>
            <div>
                <h2>Additional Options</h2>
                <label>Are you selling this event?</label>
                <input type='text'/>
                <label>Is this event public or private?</label>
                <input type='text'/>
            </div>
        </form>
        <button>Create</button>
    </article>
  )
}

export default EventDetailsForm