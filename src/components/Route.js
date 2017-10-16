/**
 * Created by dengjingwen on 17/9/6.
 */
import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react';
import App from './Main';
import Country from './Country';

class RouterComponent extends React.Component {93
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/index" component={App}/>
                    <Route path="/country" component={Country}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default RouterComponent;


