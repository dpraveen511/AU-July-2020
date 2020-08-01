import React from 'react';
const Header=()=>{
    return (
        <header style={headerStyle}>
            <h1>TodoLists</h1>
        </header>
    )
}
export default Header;

const headerStyle = {
    background: "#cc66ff",
    color: '#fff',
    textAlign: 'center',
    padding: '5px'
};