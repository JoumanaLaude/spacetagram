import Home from './Home/Home';
import Browse from './Browse/Browse';
import Favorites from './Favorites/Favorites';
import About from './About';
import { Switch, Route } from 'react-router-dom';

export default function Main() {
    const HomePage = () => {
        return (
            <Home />
        );
    };

    return (
        <div>
            <Switch>
                <Route component={HomePage} exact path='/' />
                <Route component={Browse} exact path='/browse' />
                <Route component={Favorites} exact path='/stars' />
                <Route component={About} exact path='/about' />
            </Switch>
        </div>
    );
}
