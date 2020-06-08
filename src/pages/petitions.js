import React from "react"
import Layout from "../components/layout"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
// import Button from "@material-ui/core/Button"

class Petitions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      output: "Making sure things are up to date!",
      hits: [],
      isLoading: false,
    }
    // this.hover = this.hover.bind(this)
    // this.nohover = this.nohover.bind(this)
  }

  componentDidMount() {
    const url =
      "https://script.google.com/macros/s/AKfycbwkigQInS7P-ETReftDOC-ei4MfZuhb7Ft4EL0o9V-6TjYZjW9W/exec"
    fetch(url)
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
        let petition = data.petitions.map(value => {
          return (
            <div
              className="data"
              // onMouseEnter={this.hover}
              // onMouseLeave={this.nohover}
            >
              <a href={value[1]}>{value[0]}</a>
              <KeyboardArrowRightIcon width="10px"></KeyboardArrowRightIcon>

              {/* <hr class="solid"></hr>openlin */}
            </div>
          )
        })
        this.setState({ output: petition })
      })
  }

  // hover(e) {
  //   e.target.style.backgroundColor = "red"
  // }

  // nohover(e) {
  //   e.target.style.backgroundColor = "#16181c"
  // }

  render() {
    return (
      <Layout>
        <div id="data-container">
          <h2>
            Take #Blaction now<span> ✊🏾</span>
          </h2>
          <h4>Petitions</h4>
          {this.state.output}
        </div>
      </Layout>
    )
  }
}

export default Petitions
