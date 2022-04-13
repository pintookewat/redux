
const initalState = 0;

const ChangeTheNumber = (state = initalState, action) => {

    if (state == 0){
    
        switch (action.type) {
            case "INCREMENT": return state + 1;
            case "DECREMENT": return state;
            default: return state;
        }


    }
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        

        default: return state;
    }
}
export default ChangeTheNumber;