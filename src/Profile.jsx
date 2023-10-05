import React, { useContext } from "react"
import UserContext from "./context/UserContext"

const Profile = () => {
	const { user } = useContext(UserContext)
	if(!user) return <h4>Please Login</h4>

    return <h4>Welcome {user.username}</h4>
}

export default Profile
