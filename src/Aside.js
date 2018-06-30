import React, { Component } from 'react';
import AsideItem from './AsideItem';

class Aside extends Component {
    render() {
        return (
            <aside className="d-none d-lg-block col-lg-3 pt-0 pl-0 pbr-10">
                <ul className="menu">
                    {this.props.item.map((item, i) => {
                        console.log("Entered");
                        // Return the element. Also pass key
                        return (<AsideItem content={item.content} title={item.title} />)
                    })}
                </ul>
            </aside>
        )
    }
}

export default Aside;