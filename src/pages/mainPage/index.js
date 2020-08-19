import React, {Component} from "react";
import {connect} from 'react-redux'

import './index.scss'

import {
    fetchData
} from '../../actions/'

import KotyaItem from "../../components/kotya-item";


class MainPage extends Component {

    componentDidMount() {
        const {fetchData} = this.props;
        fetchData();
    }

    render() {
        const {data} = this.props;
        const arrKotyaItems = new Array();
        if (data !== undefined && data !== null){
            for (let key in data){
                arrKotyaItems.push(data[key])
            }
        }

        return (
            <div className="main-page">
                <div className="main-page-container">
                    <div className="main-page__header-text">
                        <p>Ты сегодня покормил кота?</p>
                    </div>
                    <div className="main-page-kotya-container">
                        {arrKotyaItems.map((item, key)=> {
                            return (
                                <KotyaItem data={item} key={key}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {data} = state.mainPage;
    return {
        data
    };
};

const mapDispatchToProps = {
    fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
