"use strict"

import "./styles/Common.css"




const BASE_URL = '/DM_MCUInfo/'; //http://localhost:31030
const HEIGHT = 0;
const COLS = [{
    title: 'MCU编号',
    field: 'No'
  },
  {
    title: '电压',
    field: 'voltage'
  },
  {
    title: '最后刷新时间',
    field: 'lastTime'
  },
  {
    title: '当日测量次数',
    field: 'daily'
  },
  {
    title: '当月测量次数',
    field: 'monthly'
  },
  {
    title: '状态',
    field: 'status',
    templet: d => `<div style="color:${(d.status=="正常")?"#5FB878":"#FF5722"}">${d.status}</<div>`
  }
]
const TABLE_CONFIG = {
  elem: '#myTable',
  height: 'full-' + HEIGHT,
  toolbar: true,
  defaultToolbar: ['filter', 'print', 'exports'],
  cols: [COLS],
  url: BASE_URL + 'InvokeJS_GetData',
  parseData: function (res) { //res 即为原始返回的数据
    console.log(res);
    return {
      "code": 0, //解析接口状态
      "msg": '', //解析提示文本
      "count": res.length, //解析数据长度
      "data": res //解析数据列表
    };
  }
}
const table = layui.table;
  


layui.$(function(){
  table.render(TABLE_CONFIG);
})

