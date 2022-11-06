import React from 'react';

 const AT = React.createContext(
    {
        Token : '',
        setToken:()=>{},
        logedIn:'no',
        setLI:()=>{},
        kind :'',
        setKind : ()=>{},
        userName : '',
        lastLogIn : '',
    }


)
export default AT;

