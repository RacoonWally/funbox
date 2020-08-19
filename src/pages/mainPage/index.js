import React, {Component} from "react";

import './index.scss'

import KotyaItem from "../../components/kotya-item";

class MainPage extends Component {

    render() {
        return (
            <div className="main-page">
                <div className="main-page-container">
                    <div className="main-page__header-text">
                        <p>Ты сегодня покормил кота?</p>
                    </div>
                    <div className="main-page-kotya-container">
                            <KotyaItem/>
                            <KotyaItem/>
                            <KotyaItem/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;
