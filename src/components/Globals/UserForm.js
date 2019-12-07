import React, { Component } from "react"

class UserForm extends Component {
  componentDidMount() {
    const script = document.createElement("script")
    script.src = "https://js.hsforms.net/forms/shell.js"
    document.body.appendChild(script)

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "6800837",
          formId: "ed291bd3-b5ab-4396-b360-e596e630f044",
          target: "#hubspotForm",
        })
      }
    })
  }

  render() {
    return (
      <div style={{ margin: "25px", backgroundColor: "transparent" }}>
        <span>
          <div id="hubspotForm" />
        </span>
      </div>
    )
  }
}

// style={
//     margin: 10px
// }

export default UserForm
