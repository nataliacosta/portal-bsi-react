import React, { Component } from 'react';
import AsideItem from './AsideItem';

class Aside extends Component {
    render() {
        const { items } = this.props;
        return (
            <aside className="d-none d-lg-block col-lg-3 pt-0 pl-0 pbr-10">
                <ul className="menu">
                    {Object.keys(items).map((key, i) => {
                        return (<AsideItem sub={items[key]} />)
                    })}
                </ul>
            </aside>
        )
    }
}

export default Aside;