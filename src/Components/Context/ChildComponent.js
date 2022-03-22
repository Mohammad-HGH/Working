// file that consumes the context
// --------- ChildComponent.js -----------
import {useContext} from "react";   // import the useContext hook that will allow you to actually use the created and imported context
import {MyNewStringContext} from "./Parent";   // import the particular context that you want to use

let ChildComponent = () => {
    let value = useContext(MyNewStringContext);
    return (
        <div> {value} </div>
    )
}
export default ChildComponent

