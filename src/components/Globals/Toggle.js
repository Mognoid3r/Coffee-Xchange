import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import Title from "../Globals/Title"

const Toggle = ({ children, title }) => {
  const [isToggled, setToggle] = useState(false)
  const fade = useSpring({
    // to: { opacity: 1 },
    // from: { opacity: 0 },

    opacity: isToggled ? 1 : 0,
    // display: isToggled ? block : 1,
    // color: isToggled ? '#000' : 'green',
    // fontSize: isToggled ? '2rem' : '5em',
    // transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)'
  })

  // <div>
  //   <button onClick={() => setToggle(!isToggled)}>{title}</button>
  //   <animated.div style={fade}>{children}</animated.div>
  // </div>

  return (
    <section className="menu py-5">
      <div className="container">
        <Title title="Our menu's" />
        <div className="row">
          <div className="col-10 col-6 mx-auto text-center text-capitalize">
            <div>
              <button
                type="button"
                key="drinks"
                className="btn btn-yellow text-capitalize m-3"
                onClick={() => setToggle(!isToggled)}
              >
                {title}
              </button>
              <animated.div style={fade}>{children}</animated.div>
            </div>
            <div>
              <button
                type="button"
                key="drinks"
                className="btn btn-yellow text-capitalize m-3"
                onClick={() => setToggle(!isToggled)}
              >
                {title}
              </button>
              <animated.div style={fade}>{children}</animated.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Toggle
