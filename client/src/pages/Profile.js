import React from 'react'
import Signmeup from '../components/Signup';

function Profile() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
      <h1>Here is your Profile!</h1>
      <Signmeup />
    </div>
  )
}

export default Profile;