import React from 'react';
import {connect} from "react-redux"

import numeral from 'numeral';
import {CryptoOptions} from './CryptoOptions'

import mockData from '../api/data';
//import {getCryptoData} from '../api/api';
import {getCryptoData} from '../store/crpto-details/actions'

const css = require('./CryptoCcyList.css');

class CryptoCcyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {selectedCcyOption: 'SGD'}
        this.items = ['SGD', 'USD', 'BTC']
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        /*try {
            getCryptoData().then( cryptosData => {
                this.setState({cryptosData: cryptosData})
            })
        } catch (error) {
            
        }*/
        const { getCryptoData } = this.props
        getCryptoData()
    }

    handleChange(event){
        this.setState({ selectedCcyOption: event.target.value });
    }

    
    render() {
        const { selectedCcyOption } = this.state
        const { cryptosData }  =  this.props
        let outPut = null
        if(cryptosData) {
            outPut =  cryptosData.map( cryptoData => {
                const priceOption = 'price_' + selectedCcyOption.toLowerCase()
                const negPercentage = cryptoData.percent_change_24h < 0  ? css.negPercentage : ''
                const cssCryptoChange = `${css.cryptoChange} ${negPercentage}`
                return (<div key= {cryptoData.id} className={css.cryptoRow}>
                    <div className={css.cryptoName}>{cryptoData.name}</div>
                    <div className={css.cryptoPrice}>{`${selectedCcyOption} ${numeral(cryptoData[priceOption]).format('0,0.00')}`}</div>
                    <div className={cssCryptoChange}>{`${cryptoData.percent_change_24h}%`}</div>
                    </div>)
            })
        } else {
            return null
        }
        return outPut ? <div>
        <CryptoOptions  items={this.items} selectedItem={this.state.selectedCcyOption} onChange={this.handleChange}/>
        {outPut}
        </div>: <div>No data available</div>
    }
}

const mapStateToProps = state => ({
    cryptosData: state
})
  
const mapDispacthToProps = dispatch =>({
    getCryptoData: () => dispatch(getCryptoData())
})
     
export default connect(mapStateToProps, mapDispacthToProps)(CryptoCcyList)
