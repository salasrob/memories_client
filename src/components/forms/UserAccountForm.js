import React from 'react'

const UserAccountForm = () => {
  return (
    <article>
        <form>
            <div>
                <label>Event Organizer Name</label>
                <input type='text'/>
                <label>About Event Organizer</label>
                <input type='text'/>
                <label>Facebook Profile URL</label>
                <input type='text'/>
                <label>LinkedIn Profile URL</label>
                <input type='text'/>
                <label>Twitter Profile URL</label>
                <input type='text'/>
            </div>
            <div>
                <label>Email address</label>
                <input type='text'/>
            </div>
            <div>
                <label>Current Password</label>
                <input type='text'/>
                <label>New Password</label>
                <input type='text'/>
                <label>Confirm New Password</label>
                <input type='text'/>
            </div>
        </form>
        <button>Update</button>
    </article>
  )
}

export default UserAccountForm