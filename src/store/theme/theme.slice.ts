import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { WritableDraft } from 'immer'
import type { Theme } from '@/shared/enums/theme.enum'
import type { RootState } from '../store'
import { defaultTheme } from './theme.consts'

interface ThemeState {
    value: Theme
}

const initialState: ThemeState = {
    value: defaultTheme
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(
            state: WritableDraft<ThemeState>,
            action: PayloadAction<Theme>
        ) {
            state.value = action.payload
        }
    }
})

export const selectTheme = (state: RootState) => state.themeSlice.value

export const { actions: themeSliceActions, reducer: themeSliceReducer } =
    themeSlice
