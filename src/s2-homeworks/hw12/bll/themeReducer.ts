const initState:ThemeStateType = {
    themeId: 1,
}

type changeThemeIdActionType = {
    type: 'SET_THEME_ID',
    id: number,
}

type ActionsType =
    changeThemeIdActionType

type ThemeStateType = {
    themeId: number,
}

export const themeReducer = (state = initState, action: ActionsType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.id
            }
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
