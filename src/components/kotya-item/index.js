import React, {Component, Fragment} from "react";
import { Link } from 'react-router-dom'

import './index.scss'

class KotyaItem extends Component {
    render() {
        return (
            <div className="main-page-item">
                <div className="main-page-item__card">
                    <div className="main-page-item__text">
                        <p>Сказочное заморское яство</p>
                    </div>
                    <div className="main-page-item__header">
                        <p>Нямушка</p>
                    </div>
                    <div className="main-page-item__subheader">
                        <p>с фуа-гра</p>
                    </div>
                    <div className="main-page-item__text __small">
                       <p>10 порций<br/>мышь в подарок</p>
                    </div>
                    <div className="main-page-item__image">
                        <img src="../../../public/images/kotya.png"></img>
                    </div>
                    <div className="main-page-item__circle">
                        <div className="main-page-item__circle__text">
                            <p>0,5<br/>кг</p>
                        </div>
                    </div>
                    <div className="main-page-item__hidden-triangle"></div>
                    <div className="main-page-item__border-top"></div>
                    <div className="main-page-item__border-left"></div>
                </div>

                <div className="main-page-item_description">
                    <p>Чего сидишь? Порадуй котэ, <span><Link className="main-page-item_description__link" to='https://rayfund.ru/'>купи.</Link></span></p>
                </div>
            </div>
        )
    }
}

export default KotyaItem;
