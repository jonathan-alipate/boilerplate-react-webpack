import React from 'react'
import request from 'superagent'

class App extends React.Component {
  state = {
    title: 'Find a GIF',
    url: 'https://via.placeholder.com/150'
  }

  bringMeAGif = (query) => {
    request.get('api.giphy.com/v1/gifs/search')
      .send({
        'api_key': 'NihSzDWuMozHjhaq01FDhNnDQMIN0mU5',
        'q': query,
        'limit': 1,
        'rating': 'pg-13',
        'lang': 'en'
      })
      .then(res => {
        const { title, url } = res.body.data
        this.setState({ title, url })
      })
  }

  render () {
    return (
      <>
        <h1>{this.title}</h1>
        <form>
          <label>
            Word:
            <input type="text" name="gif-name" id="gif-name"/>
          </label>
          <button onClick={() => this.bringMeAGif(document.getElementById('gif-name').value)}>Bring me a gif</button>
          <img src={this.gifURL}></img>
        </form>
      </>
    )
  }
}

export default App
