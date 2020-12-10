




import React, { Component } from 'react'
import MenuNavbar from '../../components/MenuNavbar/MenuNavbar'
import TableOrder from '../../components/TableOrder/TableOrder'
import Payment from '../../components/Payment/Payment'

export default class OrderPage extends Component {
   
    render() {
        const tableNumber = this.props.match.params.table;
        return (
            <div>
                <MenuNavbar tableNumber={tableNumber} />
                <TableOrder />
                <Payment/>
                <h1>This is the review of your order so far</h1>
            </div>
        )
    }
}

