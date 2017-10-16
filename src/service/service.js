/**
 * Created by dengjingwen on 17/9/6.
 */
import constant from './../service/constant'
class service{
    constructor(){
        this.apiUrl = constant.API_URL_DEV;
    }
    getNationList(req, callback){
        const url = `${this.apiUrl}/api-visa-query/country`
        const option = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            body: req
        }
        fetch(url, option)
            .then((res) => res.json())
            .then((res) => {
            callback(res)
        })
    }
}
export default new service()
