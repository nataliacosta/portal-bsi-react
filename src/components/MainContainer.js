import React from 'react';
import Aside from './Aside';
import Content from './Content';
import structure from '../structure.json'

const MainContainer = (props) => {
    let contentPath;
    if (props.sub === undefined) {
        contentPath = structure[props.page].subs[props.page].content;
    } else if (props.sub2 === undefined) {
        contentPath = structure[props.page].subs[props.sub].content;
    } else {
        contentPath = structure[props.page].subs[props.sub].subs[props.sub2].content;
    }
    return (
        <div className="container-small">
            <div className="container">
                <div className="row">
                    <Aside page={props.page} sub={props.sub} sub2={props.sub2}/>
                    <Content path={contentPath} />
                </div>
            </div>
        </div>
    )
}

export default MainContainer;