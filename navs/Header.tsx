import React from 'react';
import { 
  Link
} from 'react-router-dom';

interface header {
  header: string,
  to: string
}

export default class extends React.Component {
  navs: header[]

  constructor(props) {
    super(props);
    this.navs =[
      {header: 'Home', to: '/'},
      {header: 'About', to: '/about'},
      {header: 'Products', to: '/products'},
      {header: 'Goal', to: '/todos'},
      {header: 'Makers', to: '/makers'},
      {header: 'Launched', to: '/launched'},
    ]
  }

  render() {
    return (<div className="header">
      <div className="navs">
        <h1>Indie Makers</h1>
        <ul>
          {this.navs.map(e => {
            return (<li>
              <Link to={e.to}>{e.header}</Link>
            </li>)
          })}
        </ul>
      </div>
      <div className="join">
        <span>
          Join Indie makers
        </span>
      </div>
    </div>);
  }
}
