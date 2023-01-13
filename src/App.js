import './App.css';
import {Header, Posts, Users} from "./components";

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
            </div>
        </div>
    );
}

export default App;