import React, { useState, useEffect, useRef } from "react"

const Dropdown = ({ dropdownOptions, selected, onSelectedChange }) => {
  // state to manage toggle visibility
  const [open, setOpen] = useState(false)
  // set ref variable
  const ref = useRef()

  // on initial render, add click event listener
  useEffect(() => {
    document.body.addEventListener("click", event => {
      // check if element that was clicked is inside of ref'd component
      // if so no action is required from this event listener so exit
      if (ref.current.contains(event.target)) {
        return
      }
      // else close the dropdown
      setOpen(false)
    })
  }, [])

  const renderedOptions = dropdownOptions.map(option => {
    // if current selection is equal to option do not generate div
    if (option.value === selected.value) {
      return null
    }

    return (
      <div
        key={option.value}
        className="item"
        // on click change selection to current option
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    )
  })

  return (
    // set the reference on the parent element
    <div ref={ref} className="ui form">
      {" "}
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          // on click set value of open to opposite of current value
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div
            // on click set value of open to opposite of current value
            onClick={() => setOpen(!open)}
            className={`menu ${open ? "visible transition" : ""}`}
          >
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown