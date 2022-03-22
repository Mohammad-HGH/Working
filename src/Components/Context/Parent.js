// TODO ---------------- Parent.js
import {createContext} from "react";
import ChildComponent from "./ChildComponent";

/*
 * you can optionally pass it a default value
 * it returns a "provider" object
*/
let MyNewStringContext = createContext('')

let Parent = (props) => {
    return (
        <div>
            <MyNewStringContext.Provider value={props.users}>
                <ChildComponent/>
            </MyNewStringContext.Provider>
        </div>
    )
}

export {MyNewStringContext};
export default Parent;

