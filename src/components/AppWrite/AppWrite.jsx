import React from 'react'

function AppWrite() {

  console.log("ENV file :",
    import.meta.env.VITE_APPWRITE_URL)
  return (
    <div>AppWrite</div>
  )
}

export default AppWrite