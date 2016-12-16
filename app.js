import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Checkbox from 'material-ui/Checkbox'

ReactDOM.render(
  <Checkbox
    // 2) uncomment this line:
    // x={}
    // 3) comment it back in again and see webpack not able to resolve the error
  />, document.getElementById('root')
)
