import React from 'react'
import request from 'superagent'

class App extends React.Component {
  state = {
    title: 'Find a GIF',
    url: 'https://via.placeholder.com/150'
  }

  bringMeAGif = (query) => {
    request.get('/api/v1/' + query)
      .then(res => {
        const randomNo = Math.floor(Math.random() * Math.floor(20))
        this.setState({
          title: res.body.data[randomNo].title,
          url: res.body.data[randomNo].images.downsized.url
        })
      })
  }

  render () {
    return (
      <>
        <h1>{this.state.title}</h1>
          <label>
            Word:
            <input type="text" name="gif-name" id="gif-name"/>
          </label>
          <button onClick={() => this.bringMeAGif(document.getElementById('gif-name').value)}>Bring me a gif</button>
        
        <img src={this.state.url} width="400" height="400"></img>
      </>
    )
  }
}

export default App
