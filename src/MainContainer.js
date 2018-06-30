import React from 'react';
import Aside from './Aside';
import Content from './Content';
import structure from './structure.json'

const MainContainer = () => {
    return (
        <div className="container-small">
            <div className="container">
                <div className="row">
                    <Aside item={structure.bsi.subs}/>
                    <Content path="/bsi/index.html" />
                </div>
            </div>
        </div>
    )
}

export default MainContainer;