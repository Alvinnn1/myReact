/**
 * Created by dengjingwen on 17/9/6.
 */

require('styles/Country.css');

import React from 'react';
import service from './../service/service'
import constant from './../service/constant'

class AppComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            imgUrl : constant.IMG_URL,
            keyword:'',
            nationList : [
                {code: 'AU', name: '澳大利亚'},
                {code: 'CA', name: '加拿大'},
                {code: 'FR', name: '法国'},
                {code: 'GB', name: '英国'},
                {code: 'IT', name: '意大利'},
                {code: 'JP', name: '日本'},
                {code: 'KR', name: '韩国'},
                {code: 'MY', name: '马来西亚'},
                {code: 'SG', name: '新加坡'},
                {code: 'TH', name: '泰国'},
                {code: 'US', name: '美国'}
            ]
        }
    }
    getImage(code){
        return `${this.state.imgUrl}/${code}.png`
    }
    getData(){
        console.log(this.state.keyword)
        if(!this.state.keyword) return
        var req = `text=${this.state.keyword}`
        service.getNationList(req, (res)=>{
            if(res.counties){
                this.setState({
                    nationList: res.counties
                })
                console.log(this.state.nationList)
            }
        })
    }
    handleChange(e){
        this.setState({
            keyword: e.target.value
        })
        this.getData()
    }
    selectCountry(code){

    }

    render() {
        return (
            <div className="index">
                <input className="input-box" type="text" onChange={this.handleChange.bind(this)} value={this.state.keyword} />
                <div>
                    <ul className="ul-style">
                        {
                            this.state.nationList
                                .map((item, index) =>
                                    <li className="li-style" key={index} onClick={this.selectCountry(item.code)}>
                                        <img className="image" src={this.getImage(item.code)} alt={item.name} />
                                        <span>{item.code}-{item.name}</span>
                                    </li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }

    componentDidMount(){
        this.getData()
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;

