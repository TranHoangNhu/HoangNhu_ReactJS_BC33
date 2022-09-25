import React, { Component } from 'react'

export default class ABAPtoHTML extends Component {
  render() {
    return (

      '<p align="center"><table style="width:35%">'
  '</table></p></p></div>'
  '<div style=''text-align:center;''><p><b style=''font-size:18;color:black;''>'
  LV_REPORT '</b>' '</br>'
   '<p align="center"><table style="width:35%">'
   '<tr><td>Company:</td><td>' LS_COMP-TEN_CTY '</td></tr>'
  '<p align="center"><table style="width:35%">'
  '<tr><td>From Period:</td><td>' LV_POPER_LOW '</td><td>To Period:</td><td>' LV_POPER_HIGH '</td><td>Năm:</td><td>' LV_NAM '</td></tr>'

    )
  }
}
