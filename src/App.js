import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor() {
    super();

    this.state = {
      filtergen: '',
      filterscourses: [],
    }
  }
  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" value={this.state.filtergen} onChange={this.updateFilter.bind(this)}/>
        </div>
        <ul>
          {posts.filter(post => post.title.toLowerCase().includes(this.state.filtergen.toLowerCase())).map(filterpost => (
            <li>
              <a href={filterpost.url}><img src={filterpost.image } /></a>
              <p>{filterpost.title}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  updateFilter(event){
    this.setState({
      filtergen: event.target.value
    })
  }
}




export default App


