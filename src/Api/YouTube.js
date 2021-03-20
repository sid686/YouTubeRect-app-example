import React from'react';
import axios from'axios';

const KEY='AIzaSyCDyeU39O-BMBdjcJwq7vpXSMHFNrNa10Q'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:10,
        key:KEY,
        type: 'video'
    }
    
})



