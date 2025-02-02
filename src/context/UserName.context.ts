'use client'

import { createContext } from 'react'
import type { IUserNameProps } from '@/shared/interfaces/username.interface'

export const UserNameContext = createContext<IUserNameProps>({ username: '' })
