import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Scrollbar } from "smooth-scrollbar-react";


function App() {
    return (
        <Scrollbar
            plugins={ {
                overscroll: {
                    effect: 'bounce',
                },
            } }>
            <div className='list-data'>
                <div className="App">
                    <NavBar/>
                    <Footer/>
                </div>
            </div>
        </Scrollbar>


    );
}

export default App;
