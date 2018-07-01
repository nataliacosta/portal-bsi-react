import React, { Component } from 'react';
import AsideItem from './AsideItem';

class AsideSubmenu extends Component {
    render() {
        return (
            <div>
            {
                Object.keys(this.props.subitems).map((i) => {
                    const classAtivo = "ativo " + this.props.page;
                    return <AsideItem sub={this.props.subitems[i]} classes={(i === this.props.active ? classAtivo : "") + " submenu"} />
                })
            }
            </div>
        )
    }
}

export default AsideSubmenu;