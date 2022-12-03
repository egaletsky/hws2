import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let result: UserType[] = []
            if (action.payload === 'up') {
                result = [...state].sort((a, b) => a.name <= b.name ? -1 : 1)
            }
            if (action.payload === 'down') {
                result =  [...state].sort((a, b) => a.name > b.name ? -1 : 1)
            }
            return result

        }
        case 'check': {

            return state.filter(el=> el.age>action.payload)
        }
        default:
            return state
    }
}
