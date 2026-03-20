import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const UserProfile = () => {
  const { selectedUser } = useContext(AppContext)

  if (!selectedUser) return <p>Оберіть користувача</p>

  return (
    <div>
      <h3>Профіль:</h3>
      <p>Name: {selectedUser.name}</p>
      <p>Age: {selectedUser.age}</p>
    </div>
  )
}

export default UserProfile
