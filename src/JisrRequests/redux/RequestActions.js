import { GET_REQUESTS } from './RequestActionTypes'
import axios from 'axios'



export const GetRequest = () => {
        return( {
            type: GET_REQUESTS,
            payload: axios({
                method: 'get',
                url: 'http://api.qa.jisr.net/v2/hr/requests/approvals',
                headers: {
        
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Access-Token': '8bb75ff1993f9918ec0ee752992d7dc7',
                locale: 'en',
                slug: 'mb',
            }
        
            }).then((res) => {
                 console.log('requests: ', res.data.data.requests )
                return  res.data
            })
        })
}

