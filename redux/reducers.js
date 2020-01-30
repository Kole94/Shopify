

export const initialState = {
    Weight: 200,
    Calories: 523.1247,
    TotalFat: 48.5941,
    SaturatedFat: 69.3748,
    TransFat: 0,
    Cholesterol: 10,
    Sodium: 780.2844,
    Carbohydrate: 7.5555,
    Fiber: 15.1524,
    Sugars: 22.6127,
    AddedSugars: 0,
    Protein: 38.9961,
    A: 1,
    C: 2,
    D: 0,
    Calcium: 35,
    Iron: 1,
    Potassium: 100
};

export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WEIGHT':
                        return {
                ...state,
                Weight: action.payload
            }

        case 'SET_CALORIES':
            return {
                ...state,
                Calories: action.payload
            }

        case 'SET_TOTALFAT':
            return {
                ...state,
                TotalFat: action.payload
            }

        case 'SET_SATURATEDFET':
            return {
                ...state,
                SaturatedFat: action.payload
            }

        case 'SET_CHOLESTEROL':
            return {
                ...state,
                Cholesterol: action.payload
            }

        case 'SET_TRANSFAT':
            return {
                ...state,
                TransFat: action.payload

            }

        case 'SET_SODIUM':
            return {
                ...state,
                Sodium: action.payload
            }

        case 'SET_CARBOHYDRATE':
            return {
                ...state,
                Carbohydrate: action.payload
            }

        case 'SET_FIBER':
            return {
                ...state,
                Fiber: action.payload
            }
        case 'SET_SUGARS':

            return {
                ...state,
                Sugars: action.payload
            }
        case 'SET_ADDEDSUGARS':
            return {
                ...state,
                AddedSugars: action.payload
            }
        case 'SET_PROTEIN':
            return {
                ...state,
                Protein: action.payload
            }
        case 'SET_A':
            return {
                ...state,
                A: action.payload

            }
        case 'SET_C':
            return {
                ...state,
                C: action.payload

            }
        case 'SET_D':
            return {
                ...state,
                D: action.payload
            }
        case 'SET_CALCIUM':
            return {
                ...state,
                Calcium: action.payload
            }
        case 'SET_IRON':
            return {
                ...state,
                Iron: action.payload
            }

        case 'SET_POTASSIUM':
            return {
                ...state,
                Potassium: action.payload
            }
        default:
            return {
                ...state
            }

    }

};