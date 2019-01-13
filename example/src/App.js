import React, { Component } from 'react'

import {Preloader} from 'circle-preloader'

export default class App extends Component {

  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
    this.state={
      loadComplete:false
    }
  }

  onClick = (event) => {
    this.setState({
      loadComplete:false
    })

    clearTimeout(this.timer)

    this.timer = setTimeout(() => {
      this.setState({
        loadComplete:true
      })
    }, 2000);
  }

  componentDidMount(){
    this.timer = setTimeout(()=>{
      this.setState({
        loadComplete:true
      })
    },2000)
  }

  render () {
    return (
      <div>
      <div>
        <Preloader visible={!this.state.loadComplete} opacity={"0.9"} backgroundColor={"black"} outerColor={"rgba(0, 183, 229)"} innerColor={"rgba(0, 183, 229)"} shadowColor={'#2187e7'}/>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100vw'}}>
        <button type="button" onClick={this.onClick}style={{cursor:'pointer',width:'250px',height:'40px'}}>Show</button>
      </div>
      </div>
    )
  }
}
