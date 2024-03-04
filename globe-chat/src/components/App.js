import {BrowserRouter as Router , Route} from 'react-router-dom';
import Chat from "./Chat"
import Join from "./Join"

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Join}/>
            <Route path="/chat" component={Chat}/>
        </Router>
    )
}

export default App
