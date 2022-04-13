import { createStore } from "redux";
import rootReducer from "./Combinredux";


const Store = createStore(rootReducer);

export default Store;