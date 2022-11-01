import React, { Component } from 'react'

export default class HangGhe extends Component {

    renderGhe =()=>{
        return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{

           



            let cssGheDaDat = ''
            let disabled = false
            if(ghe.daDat){
                cssGheDaDat="gheDuocChon"
                disabled = true
            }
            return <button disabled={disabled} className={`ghe ${cssGheDaDat}` } key={index}>
                {ghe.soGhe}
            </button>
        })

       
    }

    renderSoHang=()=>{

        return this.props.hangGhe.danhSachGhe.map((Hang,index)=>{
            return <button  key={index} className='rowNumber'>{Hang.soGhe} </button>
        })
        
    }
    renderHangGhe = () =>{
        if(this.props.soHangGhe === 0 ){
            return <div className='ms-3'>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        }else{
            return <div>
            {this.props.hangGhe.hang} {this.renderGhe()}
        </div> 
        }
        
    }

  render() {
    return (
      <div className='text-warning text-start ms-5  ' style={{fontSize:"30px"}}>
        {this.renderHangGhe()}
      </div>
    )
  }
}
