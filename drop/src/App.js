import React, { useState } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
  const data = [
    {
      value: 1,
      label: "Electrical"
    },
    {
      value: 2,
      label: "Plumbing"
    },
    {
      value: 3,
      label: "Heating & Cooling"
    },
    {
      value: 4,
      label: "Painting"
    },
    {
      value: 5,
      label: "Handyman"
    },
    {
      value: 6,
      label: "Appliance Service"
    }
  ];
 
  const [selectedOption, setSelectedOption] = useState(null);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }
 
  return (
    <div className="App">
      <div style={{width: '300px', padding: 20}}> 
      <Select 
        placeholder="Select Option"
        value={selectedOption} // set selected service id
        options={data} // set list of services
        onChange={handleChange} // assign onChange function
      /></div>
 
      {selectedOption && <div style={{ padding: 20, marginTop: 5, lineHeight: '25px' }}>        
        <div style={{ marginTop: 10 }}><b>Selected Service: </b>{selectedOption.label}</div>
        <div><b>Service_id: </b> {selectedOption.value}</div>
      </div>}
    </div>
  );
}
 
export default App;