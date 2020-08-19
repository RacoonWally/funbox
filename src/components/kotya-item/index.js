import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom'

import './index.scss'


class KotyaItem extends Component {

    state = {
        id: "",
        isSelected: false
    };

    selectItem = (id) => {
        if (this.state.isSelected) {
            this.setState({"isSelected": false});
            this.setState({"id": id});
        } else {
            this.setState({"isSelected": true});
            this.setState({"id": id});
        }
    };

    render() {
        const {id, textHeader, name, kind, quantity, present, happy = "", weight, description, lnk = false, color, available} = this.props.data;
        const splitedWeight = weight.split(" ");
        const intWeight = splitedWeight[0];
        const strWeight = splitedWeight[1];
        let textLink = "";
        if (lnk) {
            textLink = "купи."
        }
        const typeColorClass = `__${color}`;
        const typeColorClassCircleBg = `__${color}-bg`;


        return (
            <div className="main-page-item">
                <div className={`main-page-item__card ${typeColorClass}`}
                     onClick={(e) => {
                         this.selectItem(id)
                     }}>
                    <div className="main-page-item__text">
                        <p>{textHeader}</p>
                    </div>
                    <div className="main-page-item__header">
                        <p>{name}</p>
                    </div>
                    <div className="main-page-item__subheader">
                        <p>{kind}</p>
                    </div>
                    <div className="main-page-item__text __small">
                        <p>{quantity}<br/>{present}<br/>{happy}</p>
                    </div>
                    <div className="main-page-item__image">
                        <img src="../../../public/images/kotya.png"></img>
                    </div>
                    <div className={`main-page-item__circle ${typeColorClassCircleBg}`}>
                        <div className="main-page-item__circle__text">
                            <p>{intWeight}<br/>{strWeight}</p>
                        </div>
                    </div>
                    <div className="main-page-item__hidden-triangle"></div>
                    <div className="main-page-item__border-top"></div>
                    <div className="main-page-item__border-left"></div>
                </div>

                <div className="main-page-item_description">
                    <p>{description}
                        <span>
                        <Link
                            className="main-page-item_description__link __blue"
                            to='https://rayfund.ru/'>
                            {textLink}
                        </Link>
                    </span></p>
                </div>
            </div>
        )
    }
}

export default KotyaItem;
