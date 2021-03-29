export const initialState = {
  wishlist: [],
  Userorders:[],
  section4Items: [],
  section5Items: [],
  section1Items: [],
  section2Items: [],

  users: null,
  viewProducImage:[],
  allorders:[],
  allusers:[]
}

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
  switch (action.type) {
    case 'SECTION4_DATA':
      return {
        ...state,
        section4Items: action.payload,
      }


      case 'SECTION1_DATA':
        return {
          ...state,
          section1Items: action.payload,
        }
        case 'SECTION2_DATA':
          return {
            ...state,
            section2Items: action.payload,
          }

      case 'SECTION5_DATA':
        return {
          ...state,
          section5Items: action.payload,
        }

    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        wishlist: action.payload,
      }

    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        wishlist: action.payload,
      }

      case 'SHOPNOW':
        return {
          ...state,
          Userorders: action.payload,
        }

        case 'ALLORDERS':
          return {
            ...state,
            allorders: action.payload,
          }

          case 'ALLUSERS':
            return {
              ...state,
              allusers: action.payload,
            }
          
        
        case 'PRODUCT_IMAGE':
          return {
            ...state,
            viewProducImage: action.payload,
          }

    case "SET_USER":
      return {
        ...state,
        users: action.payload
      }

    default:
      return state
  }
}

export default reducer
