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
          // Update the existing layer's shape with the new SVG
          return {...layer, SVG: newLayerShape};
        }
      }); 
      setDemoCursor({ ...demoCursor, layers: newLayers }); // Take a copy of demoCursor State and update with the new layer
    }

    // Update the shape within the layers array of the cursor object
    function handleMixBlendModeSelection(e){
      let newMixBlendMode;
      // let newLayer;
      switch(e.target.id){  // ID of the radio checkboxes
        case "mixedblend-normal": newMixBlendMode = "circle"; break;
        case "mixedblend-lighten": newMixBlendMode = "lighten"; break;
        case "mixedblend-darken": newMixBlendMode = "darken"; break;
        case "mixedblend-overlay": newMixBlendMode = "overlay"; break;
        case "mixedblend-difference": newMixBlendMode = "difference"; break;
      }
      // // Note: layers is an array of layer objects so need to use map to update
      // const newLayers = demoCursor.layers.map((layer, index) => {
      //   if(index == 0){
      //     // Update the existing layer's shape with the new SVG
      //     return {...layer, mixBlendMode: newMixBlendMode};
      //   }
      // }); 
      setDemoCursor({ ...demoCursor, mixBlendMode: newMixBlendMode }); // Take a copy of demoCursor State and update with the new layer
    }

    // Update the fill colour of the cursor
    function handleFillColourSelection(e){
      const newColour = e.target.value;
      // Note: layers is an array of layer objects so need to use map to update State
      const newLayers = demoCursor.layers.map((layer, index) => {
        if(index == 0){
          // Update the existing layer's shape with the new SVG
          return {...layer, fill: newColour};
        }
      }); 
      setDemoCursor({ ...demoCursor, layers: newLayers }); // Take a copy of demoCursor State and update with the new layer
    }

    // Update the fill colour of the cursor
    function handleStrokeColourSelection(e){
      const newColour = e.target.value;
      // Note: layers is an array of layer objects so need to use map to update State
      const newLayers = demoCursor.layers.map((layer, index) => {
        if(index == 0){
          // Update the existing layer's shape with the new SVG
          return {...layer, stroke: newColour};
        }
      }); 
      setDemoCursor({ ...demoCursor, layers: newLayers }); // Take a copy of demoCursor State and update with the new layer
    }

    // Update changes in the cursor size
    function handleCursorSizeChanges(e){
      // let newSizeH; let newSizeW;
      // Make a copy of the existing cursor size object with the updated sizes
      const newSize = {...demoCursor.layers[0].size, 
        height: (e.target.name == "cursorsizeh") ? Number(e.target.value) : demoCursor.layers[0].size.height,
        width: (e.target.name == "cursorsizew") ? Number(e.target.value) : demoCursor.layers[0].size.width,
      }; 
      // console.log("newSize is: ", newSize)
      // console.log("e.target.value is: ", e.target.value)
      // Note: layers is an array of layer objects so need to use map to update State
      const newLayers = demoCursor.layers.map((layer, index) => {
        if(index == 0){
          // Update the existing layer's shape with the new cursor size
          return {...layer, size: newSize};
        }
      }); 
      // console.log("newLayers is: ", newLayers)
      setDemoCursor({ ...demoCursor, layers: newLayers }); // Take a copy of demoCursor State and update with the new layer
    }

    // Update changes in the stroke size
    function handleStrokeSizeChange(e){
      // const newStrokeSize = e.target.value;
      // console.log("e.target.value is: ", e.target.value)
      // Note: layers is an array of layer objects so need to use map to update State
      const newLayers = demoCursor.layers.map((layer, index) => {
        if(index == 0){
          // Update the existing layer's shape with the new SVG
          return {...layer, strokeSize: Number(e.target.value)};
        }
      }); 
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
            <InputGroup className="mb-1">
              <Form.Check disabled type="switch" id="custom-switch" label="Enable Cursor" checked />  
            </InputGroup>
            
            {/* System Cursor */}
            <InputGroup className="mb-1">
              <Form.Check type="switch" checked={demoCursor.showSystemCursor} onChange={handleShowSystemCursorSwitch}  id="show-system-cursor" label="Show System Cursor" />
            </InputGroup>
            {/* <Form.Check type="switch" checked={demoCursor.showSystemCursor} onChange={setDemoCursor(!demoCursor)}  id="show-system-cursor" label="Show System Cursor" /> */}
            
            {/* mixBlendMode */}
            {/* <Form.Label>mixBlendMode</Form.Label> */}
            <InputGroup className="mb-3">
              <InputGroup.Text>mixBlendMode</InputGroup.Text>
              <Form.Check inline label="normal" checked={demoCursor.mixBlendMode == "normal"} onChange={handleMixBlendModeSelection} name="mixBlendMode" type="radio" id={`mixedblend-normal`} />
              <Form.Check inline label="lighten" checked={demoCursor.mixBlendMode == "lighten"} onChange={handleMixBlendModeSelection} name="mixBlendMode" type="radio" id={`mixedblend-lighten`} />
              <Form.Check inline label="darken" checked={demoCursor.mixBlendMode == "darken"} onChange={handleMixBlendModeSelection} name="mixBlendMode" type="radio" id={`mixedblend-darken`} />
              <Form.Check inline label="overlay" checked={demoCursor.mixBlendMode == "overlay"} onChange={handleMixBlendModeSelection} name="mixBlendMode" type="radio" id={`mixedblend-overlay`} />
              <Form.Check inline label="difference" checked={demoCursor.mixBlendMode == "difference"} onChange={handleMixBlendModeSelection} name="mixBlendMode" type="radio" id={`mixedblend-difference`} />

            </InputGroup>




            {/* zIndex */}             
            <InputGroup className="mb-3">
              <InputGroup.Text>zIndex</InputGroup.Text>
              <Form.Control type="text" value={demoCursor.zIndex} disabled />              
            </InputGroup>


          </div>
        </div>

        {/* Layer Options */}
        <div className={styles.cursorLayerOptionsDiv}>          
          <h4>Layer Options</h4>
          {/* Use Accordion to show Layers */}
          {/* <Accordion defaultActiveKey="layer1"> */}
          <Accordion >
            <Accordion.Item eventKey="layer1">
              <Accordion.Header>Layer 1</Accordion.Header>
              <Accordion.Body>
                
                {/* Shape selection */}     
                <InputGroup className="mb-3">
                  <InputGroup.Text>Layer Shape: </InputGroup.Text>
                    <Form.Check inline label="circle" checked={demoCursor.layers[0].SVG == "circle"} onChange={handleShapeSelection} name="layer-shape" type="radio" id={`layer-shape-circle`} />                    
                    <Form.Check inline label="arrow" checked={demoCursor.layers[0].SVG == "arrow"} onChange={handleShapeSelection} name="layer-shape" type="radio" id={`layer-shape-arrow`} />
                    <Form.Check inline label="cross" checked={demoCursor.layers[0].SVG == "cross"} onChange={handleShapeSelection} name="layer-shape" type="radio" id={`layer-shape-cross`} />
                    <Form.Check inline label="square" checked={demoCursor.layers[0].SVG == "square"} onChange={handleShapeSelection} name="layer-shape" type="radio" id={`layer-shape-square`} />                  
                </InputGroup>

                {/* Colour selection */}  
                <Row className="mb-3">
                  <Col>
                    {/* <Form.Group as={Row} className="mb-3" controlId="fillColourInput"> */}
                    <Form.Group as={Row} className="mb-3" controlId="fillColourInput">
                      <Form.Label column>Fill Colour</Form.Label>
                      <Col>
                        {/* <Form.Control type="color" defaultValue="#DDDDDD" title="Fill Colour" /> */}
                        {/* // layers: [ { SVG: "arrow", fill: "yellow", stroke: "black", strokeSize: 10, size: { height: 20, width: 20 } } ], */}
                        <Form.Control type="color" value={demoCursor.layers[0].fill} onChange={handleFillColourSelection} name="fillcolour" title="Fill Colour" />
                        {/* <Form.Control type="color" value="#ff0000" title="Fill Colour" /> */}
                      </Col>
                    </Form.Group>
                  </Col>                 
                  <Col>
                    <Form.Group as={Row} className="mb-3" controlId="strokeColourInput">
                      <Form.Label column>Stroke Colour</Form.Label>
                      <Col>
                        {/* <Form.Control type="color" defaultValue="#888888" title="Stroke Colour" /> */}
                        {/* <Form.Control type="color" value={demoCursor.layers[0].stroke} title="Fill Colour" /> */}
                        <Form.Control type="color" value={demoCursor.layers[0].stroke} onChange={handleStrokeColourSelection} name="strokecolour" title="Fill Colour" />
                      </Col>
                    </Form.Group>                
                  </Col>
                </Row>

                
                {/* Sizes */}

                <InputGroup className="mb-3">
                  {/* <Form.Label>Stroke Size</Form.Label> */}
                  <InputGroup.Text>Cursor Size HxW</InputGroup.Text>
                  <Form.Control type="text" name="cursorsizeh" value={demoCursor.layers[0].size.height} onChange={handleCursorSizeChanges} placeholder="Cursor Size (H)" title="Cursor Size (H)" />
                  <Form.Control type="text" name="cursorsizew" value={demoCursor.layers[0].size.width} onChange={handleCursorSizeChanges} placeholder="Cursor Size (W)" title="Cursor Size (W)" />
                  <InputGroup.Text>Stroke Size</InputGroup.Text>
                  <Form.Control type="text" title="Stroke Size" name="strokesize" value={demoCursor.layers[0].strokeSize} onChange={handleStrokeSizeChange} placeholder="Stroke Size" />
                </InputGroup>                                  

                {/* <Row>
                  <Col>
                    <Form.Group as={Row} className="mb-3" controlId="strokeSize">
                      <Form.Label>Stroke Size</Form.Label>
                      <Form.Control type="text" title="Stroke Size" placeholder="Stroke Size" />
                    </Form.Group>                                  
                    <InputGroup as={Row} className="mb-3" controlId="strokeSize">
                  </Col>
                  <Col>
                    <Form.Group as={Row} className="mb-3" >
                      <Form.Label>Cursor Size</Form.Label>
                      <Form.Control type="text" id="cursorSizeHorizontal" placeholder="Cursor Size (H)" title="Cursor Size (H)" />
                      <Form.Control type="text" id="cursorSizeVertical" placeholder="Cursor Size (V)" title="Cursor Size (V)" />
                    </Form.Group>                
                    /* <InputGroup as={Row} className="mb-3" >
                      <Form.Label>Cursor Size</Form.Label>
                      <Form.Control type="text" id="cursorSizeHorizontal" placeholder="Cursor Size (H)" title="Cursor Size (H)" />
                      <Form.Control type="text" id="cursorSizeVertical" placeholder="Cursor Size (V)" title="Cursor Size (V)" />
                    </InputGroup>                
                  </Col>

                </Row> */}


                {/* Others */}
                {/* <Form.Label>Size</Form.Label>
                <Form.Range />
                <Form.Label>Opacity</Form.Label>
                <Form.Range />
                <Form.Label>Delay</Form.Label>
                <Form.Range /> */}                
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="layer2">
              <Accordion.Header>Layer 2</Accordion.Header>
              <Accordion.Body>
                <p>Note: While @holmesdev/cursors supports multiple layers this demonstration currently only has one.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>        
        </div>


        </div>

        </Form>

      </div>  // End of cursorOptionsDiv

  
)}

