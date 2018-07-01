import React, { Component } from 'react';
import AsideItem from './AsideItem';
import structure from '../structure.json';
import AsideSubmenu from './AsideSubmenu';

class Aside extends Component {
    state = {};

    componentWillMount() {
        const { page, sub, sub2 } = this.props;
        this.setState(
            {
                "items": structure[page].subs,
                "subitems": (sub !== undefined ? structure[page].subs[sub].subs : undefined),
                "active": (sub2 !== undefined ? sub2 : (sub !== undefined ? sub : page)),
            }
        )
    }

    render() {
        return (
            <aside className="d-none d-lg-block col-lg-3 pt-0 pl-0 pbr-10">
                <ul className="menu">
                {Object.keys(this.state.items).map((key) => {
                    let comp;
                    const classAtivo = "ativo " + this.props.page;
                    comp = <AsideItem sub={this.state.items[key]} classes={(key === this.state.active ? classAtivo : "")}/>;
                    if (key === this.props.sub && this.state.subitems !== undefined) {
                        return (
                            <div>
                                <AsideItem sub={this.state.items[key]} classes={(key === this.state.active ? classAtivo : "")}/>
                                <AsideSubmenu subitems={this.state.subitems} page={this.props.page} active={this.state.active} />
                            </div>
                        )
                    }
                    return (comp)
                })}
                </ul>
            </aside>
        )
    }
}
/*
<ul className="menu">
{Object.keys(items).map((key, i) => {
    return (<AsideItem sub={items[key]} />)
})}
</ul>*/
export default Aside;