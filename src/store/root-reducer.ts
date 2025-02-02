import { combineReducers } from 'redux'
import { api } from './api/api'
import { themeSliceReducer } from './theme/theme.slice'

export const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    themeSlice: themeSliceReducer
})
