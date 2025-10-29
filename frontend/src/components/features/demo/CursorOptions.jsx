import React from 'react'

// Node imports
import { Button, Accordion, Dropdown, DropdownButton, Form, Row, Col, InputGroup, AccordionBody } from 'react-bootstrap';

// Local imports
import * as styles from './CursorOptions.css'; // Vanilla Extract styling file


// Main component
export default function CursorOptions( {demoCursor, setDemoCursor} ) {
  // Functions

    // Handle option changes
    // function handleShowSystemCursorSwitch(e){
    function handleShowSystemCursorSwitch(){
      // console.log("Event is: ", e )
      // setDemoCursor(!demoCursor); // Toggle the switch
      setDemoCursor({ ...demoCursor, showSystemCursor: !demoCursor.showSystemCursor }); // Spread operator to copy the other fields and then toggle
    }
    
    // Update the shape within the layers array of the cursor object
    function handleShapeSelection(e){
      // const cursor = demoCursor; // Make a copy of the current demo cursor
      let newLayerShape;
      // let newLayer;
      switch(e.target.id){  // ID of the radio checkboxes
        case "layer-shape-circle": newLayerShape = "circle"; break;
        case "layer-shape-arrow": newLayerShape = "arrow"; break;
        case "layer-shape-square": newLayerShape = "square"; break;
        case "layer-shape-cross": newLayerShape = "cross"; break;
      }
      // Note: layers is an array of layer objects so need to use map to update
      const newLayers = demoCursor.layers.map((layer, index) => {
        if(index == 0){
          // Update the existing layer's shape
          return {...layer, SVG: newLayerShape};
        }
      }); 


      // const currentLayer = demoCursor.layers[0];  // Object representing the layer State
      // console.log("currentLayer is: ", currentLayer )
      
      // const newLayer = {...currentLayer, SVG: newLayerShape };  // Take a copy of the existing layer object and update the shape
      // console.log("newLayer is: ", newLayer )
      // console.log("demoCursor.layers[0] is: ", demoCursor.layers[0] )

      // const newLayersArray = [...demoCursor.layers, ]
      
      setDemoCursor({ ...demoCursor, layers: newLayers }); // Take a copy of demoCursor State and update with the new layer
    }

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
            <Form.Check type="switch" checked={demoCursor.showSystemCursor} onChange={handleShowSystemCursorSwitch}  id="show-system-cursor" label="Show System Cursor" />
            {/* <Form.Check type="switch" checked={demoCursor.showSystemCursor} onChange={setDemoCursor(!demoCursor)}  id="show-system-cursor" label="Show System Cursor" /> */}
            
            {/* mixBlendMode */}
            <InputGroup className="mb-3">
              <InputGroup.Text>mixBlendMode: </InputGroup.Text>
              <Form.Check inline label="normal" name="mixBlendMode" type="radio" id={`inline-radio-1`} />
              <Form.Check inline label="***" name="mixBlendMode" type="radio" id={`inline-radio-2`} />            
            </InputGroup>
            
            {/* zIndex */}             
            <InputGroup className="mb-3">
              <InputGroup.Text>zIndex: </InputGroup.Text>
              <Form.Control type="text" value={demoCursor.zIndex} placeholder="2147483647" />              
            </InputGroup>


          </div>
        </div>

        {/* Layer Options */}
        <div className={styles.cursorLayerOptionsDiv}>          
          <h4>Layer Options</h4>
          {/* Use Accordion to show Layers */}
          <Accordion defaultActiveKey="layer1">
            <Accordion.Item eventKey="layer1">
              <Accordion.Header>Layer 1</Accordion.Header>
              <Accordion.Body>
                
                {/* Shape selection */}     
                <InputGroup className="mb-3">
                  <InputGroup.Text>Layer Shape: </InputGroup.Text>
                    <Form.Check inline label="circle" checked={demoCursor.layers[0].SVG == "circle"} onChange={handleShapeSelection} name="layer-shape" type="radio" id={`layer-shape-circle`} />
                    {/* <Form.Check {demoCursor.layers[0].SVG == "circle" && checked} inline label="circle" onChange={handleShapeSelection} name="layer-shape" type="radio" id={`layer-shape-circle`} /> */}
                    <Form.Check inline label="arrow" checked={demoCursor.layers[0].SVG == "arrow"} onChange={handleShapeSelection} name="layer-shape" type="radio" id={`layer-shape-arrow`} />
                    <Form.Check inline label="cross" checked={demoCursor.layers[0].SVG == "cross"} onChange={handleShapeSelection} name="layer-shape" type="radio" id={`layer-shape-cross`} />
                    <Form.Check inline label="square" checked={demoCursor.layers[0].SVG == "square"} onChange={handleShapeSelection} name="layer-shape" type="radio" id={`layer-shape-square`} />                  
                </InputGroup>

                {/* Colour selection */}  
                <Row className="mb-3">
                  <Col>
                    <Form.Group as={Row} className="mb-3" controlId="fillColourInput">
                      <Form.Label column>Fill Colour</Form.Label>
                      <Col>
                        <Form.Control type="color" defaultValue="#DDDDDD" title="Fill Colour" />
                      </Col>
                    </Form.Group>
                  </Col>                 
                  <Col>
                    <Form.Group as={Row} className="mb-3" controlId="strokeColourInput">
                      <Form.Label column>Stroke Colour</Form.Label>
                      <Col>
                        <Form.Control type="color" defaultValue="#888888" title="Stroke Colour" />
                      </Col>
                    </Form.Group>                
                  </Col>
                </Row>

                
                {/* Sizes */}
                <Row>
                  <Col>
                    <Form.Group as={Row} className="mb-3" controlId="strokeSize">
                      <Form.Label>Stroke Size</Form.Label>
                      <Form.Control type="text" title="Stroke Size" placeholder="Stroke Size" />
                    </Form.Group>                                  
                  </Col>
                  <Col>
                    <Form.Group as={Row} className="mb-3" >
                      <Form.Label>Cursor Size</Form.Label>
                      <Form.Control type="text" id="cursorSizeHorizontal" placeholder="Cursor Size (H)" title="Cursor Size (H)" />
                      <Form.Control type="text" id="cursorSizeVertical" placeholder="Cursor Size (V)" title="Cursor Size (V)" />
                    </Form.Group>                
                  </Col>

                </Row>
                {/* Others */}
                {/* <Form.Label>Size</Form.Label>
                <Form.Range />
                <Form.Label>Opacity</Form.Label>
                <Form.Range />
                <Form.Label>Delay</Form.Label>
                <Form.Range /> */}                
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Header>Layer 2</Accordion.Header>
              <Accordion.Body>
                <p>While React Cursor supports multiple layers this demonstration currently only supports one</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>        
        </div>


        </div>

        </Form>

      </div>  // End of cursorOptionsDiv

  
)}

