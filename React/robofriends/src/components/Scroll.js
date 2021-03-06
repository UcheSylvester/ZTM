import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '2px solid #9ff1ef', borderRadius: '5px', height: '500px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;