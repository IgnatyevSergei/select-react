import {ADD_CAR_IN_COLLECTION, REMOVE_CAR_IN_COLLECTION} from "../actions/actions";

const initialState = {
    carModels: [
        {carBrand: "BMW", id: 1},
        {carBrand: "Audi", id: 2},
        {carBrand: "Ford", id: 3},
        {carBrand: "Mazda", id: 4},
        {carBrand: "Toyota", id: 5},
        {carBrand: "Nissan", id: 6},
        {carBrand: "Buick", id: 7},
        {carBrand: "Cadillac", id: 8},
        {carBrand: "Dodge", id: 9},
        {carBrand: "Lexus", id: 10},
    ],
    carCollection: []
}



export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAR_IN_COLLECTION:
            return {
                ...state,
                carCollection: [...state.carCollection ,action.payload]

            }
        case REMOVE_CAR_IN_COLLECTION:
            return {
                ...state,
                carCollection: action.payload
            }

        default:
            return state
    }
}