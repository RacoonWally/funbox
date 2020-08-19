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

    selectedItemClassNames = (available) =>{
        if (available){
            if (this.state.isSelected) {
                return "main-page-item__card-selected"
            } else
                return "";
        } else {
            return "main-page-item__card-selected"
        }
    };

    unavalibleTextColor = (available) => {
        if (!available) {
            return "__yellow"
        } else
            return "";
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

        const cardSelected = this.selectedItemClassNames(available);
        const unavalibleText = this.unavalibleTextColor(available);


        return (
            <div className="main-page-item">
                <div className={`main-page-item__card ${typeColorClass}`}
                     onClick={(e) => {
                         this.selectItem(id)
                     }}>
                    <div className="main-page-item__text">
                        <label>{textHeader}</label>
                    </div>
                    <div className="main-page-item__header">
                        <label>{name}</label>
                    </div>
                    <div className="main-page-item__subheader">
                        <label>{kind}</label>
                    </div>
                    <div className="main-page-item__text __small">
                        <label>{quantity}<br/>{present}<br/>{happy}</label>
                    </div>
                    <div className="main-page-item__image">
                        <img src={require("../../../public/images/kotya.png")} alt=""/>
                    </div>
                    <div className={`main-page-item__circle ${typeColorClassCircleBg}`}>
                        <div className="main-page-item__circle__text">
                            <label>{intWeight}<br/>{strWeight}</label>
                        </div>
                    </div>
                    <div className="main-page-item__hidden-triangle"></div>
                    <div className="main-page-item__border-top"></div>
                    <div className="main-page-item__border-left"></div>
                    <div className={cardSelected}></div>
                </div>


                <div className={`main-page-item_description ${unavalibleText}`} onClick={(e) => {
                    this.selectItem(id)
                }}>
                    <label>{description}
                        <span>
                        <Link
                            className="main-page-item_description__link __blue"
                            to='https://rayfund.ru/'>
                            {textLink}
                        </Link>
                    </span></label>
                </div>
            </div>
        )
    }
}

export default KotyaItem;
