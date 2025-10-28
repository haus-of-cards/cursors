import React from 'react'

// Node imports
import { Button, Accordion, Dropdown, DropdownButton, Form, Row, Col } from 'react-bootstrap';

// Local imports
import * as styles from './CursorOptions.css'; // Vanilla Extract styling file


// Main component
export default function CursorOptions() {

  // Markup
  return (

    <div className={styles.cursorOptionsDiv}>

      {/* <h3>Cursor Options</h3> */}

      {/* Form wraps all configurable cursor options */}
      <Form >

      {/* Div containing all the Demo Cursor options */}
      <div className={styles.cursorMainAndLayerOptionsDiv}>
           
        {/* Main Options */}
        <div className={styles.cursorMainOptionsDiv}>          
          <h4>Main Options</h4>
          <div>
            {/* Cursor Enable. Note: It is enabled by default so it can be used in the Testbed */}
            <Form.Check disabled type="switch" id="custom-switch" label="Enable Cursor" checked />  
            {/* System Cursor */}
            <Form.Check type="switch" id="custom-switch" label="Show System Cursor" />
            {/* mixBlendMode */}
            <Form.Check inline label="normal" name="mixBlendMode" type="radio" id={`inline-radio-1`} />
            <Form.Check inline label="***" name="mixBlendMode" type="radio" id={`inline-radio-2`} />
            {/* zIndex */}
            <Form.Group className="mb-3" controlId="formZIndex">
              <Form.Label sm="2">zIndex</Form.Label>              
              <Form.Control type="text" placeholder="2147483647" />              
            </Form.Group>
          </div>
        </div>

        {/* Layer Options */}
        <div className={styles.cursorLayerOptionsDiv}>          
          <h4>Layer Options</h4>
          {/* Use Accordion to show Layers */}
          <Accordion >
            <Accordion.Item eventKey="layer1">
              <Accordion.Header>Layer 1</Accordion.Header>
              <Accordion.Body>
                {/* Shape selection */}           
                <Form.Select aria-label="Shape Selection">
                  {/* <option > Open this select menu</option> */}
                  <option value="circle">Circle</option>
                  <option value="arrow">Arrow </option>
                  <option value="cross">Cross</option>
                  <option value="square">Square</option>
                </Form.Select>                
                {/* Colour selection */}                  
                <Form.Group className="mb-3" controlId="fillColourInput">
                  <Form.Label>Fill Colour</Form.Label>
                  <Form.Control type="color" defaultValue="#DDDDDD" title="Fill Colour" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="strokeColourInput">
                  <Form.Label>Stroke Colour</Form.Label>
                  <Form.Control type="color" defaultValue="#888888" title="Stroke Colour" />
                </Form.Group>                
                {/* Sizes */}
                <Form.Group className="mb-3" controlId="strokeSizeInput">
                  <Form.Label>Stroke Size</Form.Label>
                  <Form.Control type="text" title="Stroke Size" placeholder='10' />
                </Form.Group>                
                <Form.Group className="mb-3" >
                  <Form.Label>Cursor Size</Form.Label>
                  <Form.Control type="text" id="strokeSizeInputHorizontal" placeholder="Horizontal Stroke Size" title="Stroke Size (H)" />
                  <Form.Control type="text" id="strokeSizeInputVertical" placeholder="Vertical Stroke Size" title="Stroke Size (V)" />
                </Form.Group>                
                {/* Others */}
                <Form.Label>Size</Form.Label>
                <Form.Range />
                <Form.Label>Opacity</Form.Label>
                <Form.Range />
                <Form.Label>Delay</Form.Label>
                <Form.Range />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>        
        </div>


        </div>

        </Form>

      </div>  // End of cursorOptionsDiv

  
)}

