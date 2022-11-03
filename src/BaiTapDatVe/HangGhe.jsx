import React, { Component } from 'react'
import {connect} from 'react-redux'
import { datGhe } from '../ReDux/reducer/datGheReducer'
 class HangGhe extends Component {
    
    renderGhe =()=>{
        return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{

           



            let cssGheDaDat = ''
            let disabled = false
            if(ghe.daDat){
                cssGheDaDat="gheDuocChon"
                disabled = true
            }

            let cssGheDangChon =""
            let indexGheDangChon = this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe === ghe.soGhe)

            if(indexGheDangChon !== -1){
                cssGheDangChon = "gheDangChon"
            }

            return <button disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangChon}` } key={index} onClick={()=>{
                const action = datGhe(ghe)
                this.props.dispatch(action)
            }}>
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


const mapStateToProp = state =>{
    return {
        danhSachGheDangDat:state.datGheReducer.danhSachGheDangDat
    }
}
export default connect (mapStateToProp)(HangGhe)