import React from 'react'

class  Timer  extends React.Component {

  state = {
    num: 0,
    clicked: false,
  }

  click = () => {
    let num = this.state.num+1
    setInterval(() => {this.setState({num: this.state.num+1})}, 1000)
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return(
      <div className='main'>
        {this.state.num > 0 ? this.state.num : null}<br/>
        {this.state.clicked ? null : <button onClick={this.click}>Count</button>}
      </div>
    )
  }
}

export default Timer
