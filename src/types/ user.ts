export interface User {
  id: string
  createdAt: string
  name: string
  avatar: string
  email: string
  phone: string
  city: string
}

export type UserFormData = Omit<User, 'id' | 'createdAt'> 