import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import UserProfile from './UserProfile'

const UserList = () => {
  const { users, setSelectedUser } = useContext(AppContext)

  return (
    <div>
      <h2>Список користувачів:</h2>

      {users.map(user => (
        <button key={user.id} onClick={() => setSelectedUser(user)}>
          {user.name}
        </button>
      ))}

      <UserProfile />
    </div>
  )
}

export default UserList
