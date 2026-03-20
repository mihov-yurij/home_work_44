import { createContext, useState } from 'react'


// создаём контекст


// создаём контекст
export const AppContext = createContext({
  users: [],
  selectedUser: null,
  setSelectedUser: () => { }
})

// провайдер
export const AppProvider = ({ children }) => {
  const [users] = useState([
    { id: 1, name: 'Анна', age: 25 },
    { id: 2, name: 'Іван', age: 30 },
    { id: 3, name: 'Олексій', age: 28 }
  ])

  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <AppContext.Provider value={{ users, selectedUser, setSelectedUser }}>
      {children}
    </AppContext.Provider>
  )
}


export default AppContext