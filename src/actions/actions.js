export const ADD_CAR_IN_COLLECTION = 'ADD_CAR_IN_COLLECTION'
export const REMOVE_CAR_IN_COLLECTION = 'REMOVE_CAR_IN_COLLECTION'

export const addCarInCollectionAC = (car) => ({type:ADD_CAR_IN_COLLECTION, payload:car})
export const removeCarInCollectionAC = (car) => ({type:REMOVE_CAR_IN_COLLECTION, payload:car})
