import React from "react"
import { Link } from "gatsby"

class Jumplinks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    this.toggleClass = this.toggleClass.bind(this)
  }

  toggleClass() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  render() {
    return (
      <div id="jump-links">
        <Link to="/vote/" className="main-link" activeClassName="active">
          <h3>Vote</h3>
        </Link>
        <Link to="/petitions/" className="main-link" activeClassName="active">
          <h3>Sign</h3>
        </Link>
        <Link to="/donations/" className="main-link" activeClassName="active">
          <h3>Donate</h3>
        </Link>

        <Link to="/books/" className="main-link" activeClassName="active">
          <h3>Books</h3>
        </Link>
      </div>
    )
  }
}

export default Jumplinks
