require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {BrowserRouter, withRouter} from 'react-router-dom'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            test:''

        }
    }

    getCountry(){
        this.props.history.push('/country')
    }
    search(){

    }
    render() {
        return (
            <div className="index">
                <img src={yeomanImage} alt="Yeoman Generator" />
                <div className="search-btn" onClick={this.getCountry.bind(this)}>CHINA</div>
                <div className="search-btn" onClick={this.search}>Search</div>
            </div>
        );
    }
}

export default withRouter(AppComponent);
