import './App.css';
import {Comments, Header, Posts, Users} from "./components";

function App() {
    return (
        <div>
            <Header/>
            <div>
                <Users/>
                <br/>
                <hr/>
                <br/>
                <Posts/>
                <br/>
                <hr/>
                <br/>
                <Comments/>
            </div>
        </div>
    );
}

export default App;