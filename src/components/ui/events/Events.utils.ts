import { join } from 'path'
import { GIT_URL } from '@/constants/git.constants'
import type { IEventResponse } from '@/store/types/event.types'

export const repoUrl = (e: IEventResponse, ...args: string[]) =>
    join(GIT_URL, e.repo.name, ...args)
