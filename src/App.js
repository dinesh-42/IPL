import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'
import './App.css'

const App = (
    <Switch>
    <Route exact path="/" components={Home}/>
    <Route  path="/team-matches/:id" components={TeamMatches}/>
    <Route  components={NotFound}/>
    </Switch>


)

export default App
