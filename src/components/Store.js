import { createStore } from "redux";
import rootReducer from "./Combine";

const store = createStore(rootReducer);
export default store;
