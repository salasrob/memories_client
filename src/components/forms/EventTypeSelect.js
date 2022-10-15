import React from 'react'

const EventTypeSelect = () => {
  return (
    <article>
        <select>
          <option>Select event type</option>
          <option>Birthday</option>
          <option>Wedding</option>
          <option>Anniversary</option>
        </select>
        <button>Continue for free</button>
        <p><em>There's no credit card required. Get started in less than 30 seconds.</em></p>
    </article>
  )
}

export default EventTypeSelect