import React from 'react';

class CheckOut extends React.Component {
    render() {
        if (localStorage.getItem('kart') === null) {
            return (
                <div>
                    <h1>You haven't yet added anything in cart</h1>
                </div>
            )
        }else{
            const kart = localStorage.getItem('kart').split('-----');
            return(
                <div style={{alignContent:'center', float:'center', fontSize:'40px', display:'block', width:'50%'}}>
                    You cart:
                    <hr/>
                    <ol>
                    {kart.map((item) => {
                       return <div><li><h1>{item}</h1></li> <hr/></div>
                    })}
                    </ol>
                </div>
            )
        }
    }
}


export default CheckOut;