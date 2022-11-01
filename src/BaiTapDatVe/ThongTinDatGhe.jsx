import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
  render() {
    return (
        <div>
        <div className='mt-3'>
            <button className='gheDuocChon'></button>
            <span className='text-light ml-2' style={{ fontSize: '20px' }}>Ghế đã đặt</span> <br />
            <button className='gheDangChon'></button>
            <span className='text-light ml-2' style={{ fontSize: '20px' }}>Ghế đang đặt</span> <br />
            <button className='ghe ml-0 ms-0'></button>
            <span className='text-light ml-2' style={{ fontSize: '20px'}}>Ghế chưa đặt</span>
        </div>
        <div className='mt-5'>
            <table className="table" border={2}>
                <thead>
                    <tr className='text-light text-center'>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                <tbody className='text-warning text-center'>
               
                </tbody>
                <tfoot className='text-success text-center fs-5 fw-bold'>
                    <tr>
                       
                        <td className='text-white'>Tổng tiền</td>
                        <td className='text-warning'>
                        
                        </td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>

        </div>
    </div>
    )
  }
}
