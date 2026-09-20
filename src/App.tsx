import { Navigate, Route, Routes } from 'react-router-dom'
import UsersPage from './pages/UsersPage/UsersPage'
import UserDetailsPage from './pages/UserDetailsPage/UserDetailsPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/users" />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserDetailsPage />} />
    </Routes>
  )
}

export default App
