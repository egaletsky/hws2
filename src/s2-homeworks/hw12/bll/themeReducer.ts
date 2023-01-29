const initState:StateType = {
    themeId: 1,
}

type changeThemeIdActionType = {
    type: 'SET_THEME_ID',
    id: number,
}

type ActionsType =
    changeThemeIdActionType

type StateType = {
    themeId: number,
}

export const themeReducer = (state = initState, action: ActionsType): StateType => { // fix any
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
