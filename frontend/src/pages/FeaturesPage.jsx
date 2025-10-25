// Page demonstrating features of the React Cursor component

// Node imports
import { Button, Accordion, Dropdown, DropdownButton, Form, Row, Col } from 'react-bootstrap';
// import ReactCursor from "@holmesdev/cursors"; // Our cursor!
import { useState } from 'react';

// Local imports
import * as styles from './FeaturesPage.css'; // Vanilla Extract styling file

// Workspace imports
import ReactCursor from "@holmesdev/cursors";




// React component FeaturesPage
export default function FeaturesPage({setMainCursor}) { 
  // States
  const [demoCursor, setDemoCursor] = useState(false); // Customised demo cursor not displayed by default
  
  
  const [testBed, setTestBed] = useState(false); // Our Testbed is initially off
  // const [numberOfLayers, setNumberOfLayers] = useState(1); // Initially only one layer for the demo cursor
  // const [layers, setLayers] = useState([]); // Used tohold the layer options for each layer

  // Functions

    // Handle cursor being moved over Testbed ie. If Testbed enabled then show demo and not main cursor
    function handleCursorOverTestbed(){
      if(testBed){
        setMainCursor(false);
        setDemoCursor(true);
      } else {
        setMainCursor(true);
        setDemoCursor(false);
      }
    }
    
    // Handle cursor leaving the Testbed ie. only main cursor shows
    function handleCursorLeavingTestbed(){  
        setDemoCursor(false);
        setMainCursor(true);
    }

    // Handle clicking of the Demo Cursor enable/disable button
      function handleTestbedButton(){
        setTestBed(!testBed); // Toggle state of the Testbed
      }


  // Markup
  return (
    <div className={styles.featuresPage}>
      {/* Demo Cursor */}
      <ReactCursor
        enable={demoCursor}
        layers={ [ { fill: "red", stroke: "green", size: { height: 30, width: 30 } } ] } 
        zIndex={10}  
      />
      <h1 >Cursor Features</h1>
      
      {/* Demo Div */}
      <div className={styles.featuresPageDemoDiv}>
        {/* Demo Cursor Testbed */}
        <div className={styles.featuresPageTestbed} 
          onMouseOver={handleCursorOverTestbed}
          onMouseOut={handleCursorLeavingTestbed}
        >
          <p>Demo Testbed goes Here</p>
          {/* <ReactCursor
            enable={demoCursor}
            layers={ [ { fill: "red", stroke: "green", size: { height: 30, width: 30 } } ] } 
            zIndex={10}  
          /> */}
        </div>
        {/* Demo Cursor Code */}
        <div className={styles.featuresPageCode}>
          <p> {`enable={demoCursor}`}          </p>
          <p> {`layers={ [ { fill: "red", stroke: "green", size: { height: 30, width: 30 } } ] }`}  </p>
          <p> {`zIndex={10}`} </p>
        </div>
      </div>
      
      {/*  */}
      <Button onClick={handleTestbedButton} >
        { !testBed && <span>Enable Testbed</span> } 
        { testBed && <span>Disable Testbed</span> }       
      </Button>       

      {/* Options Div */}
      <div className={styles.featuresPageOptionsDiv}>
      {/* <div > */}
        <div className={styles.featuresPageOptionsMainDiv}>
          <h4>Cursor Options</h4>
          <Form className={styles.featuresPageOptionsMain}>
            <Row>
              <Col>
                {/* Enable */}
                <Form.Check                 
                  disabled
                  type="switch"
                  id="custom-switch"
                  label="Enable Cursor"
                  checked // Enabled by default
                  />
                {/* System Cursor */}
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  label="Show System Cursor"
                  />
                {/* mixBlendMode */}
              </Col>
              <Col>
                <div key={`inline-radio`} className="mb-3">
                  mixBlendMode
                  <Form.Check
                    inline
                    label="normal"
                    name="mixBlendMode"
                    type="radio"
                    id={`inline-radio-1`}
                  />
                  <Form.Check
                    inline
                    label="***"
                    name="mixBlendMode"
                    type="radio"
                    id={`inline-radio-2`}
                  />
                </div>
                {/* zIndex */}
                <Form.Group as={Row} className="mb-3" controlId="formZIndex">
                  <Form.Label column sm="2">
                    zIndex
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="2147483647" />
                  </Col>
                </Form.Group>
              </Col>

            </Row>

            {/* <Form.Select aria-label="Fill Colour">
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
            </Form.Select> */}


          </Form>


        </div>


        <h4>Layer Options</h4>
        {/* Use Accordion to show Layers */}
        {/* <Accordion defaultActiveKey="layer1"> */}
        

        <Accordion >
          <Accordion.Item eventKey="layer1">
            <Accordion.Header>Layer 1</Accordion.Header>
            <Accordion.Body>
              <div>
                {/* Basic Cursor Options */}
                <Form>
                  <Form.Select aria-label="Shape Selection">
                    {/* <option > Open this select menu</option> */}
                    <option value="circle">Circle</option>
                    <option value="arrow">Arrow </option>
                    <option value="cross">Cross</option>
                    <option value="square">Square</option>
                  </Form.Select>
                  
                  <Row>
                    <Form.Group as={Col} className="mb-3" controlId="fillColourInput">
                      <Form.Label>Fill Colour</Form.Label>
                      <Form.Control type="color" defaultValue="#DDDDDD" title="Fill Colour" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="strokeColourInput">
                      <Form.Label>Stroke Colour</Form.Label>
                      <Form.Control type="color" defaultValue="#888888" title="Stroke Colour" />
                    </Form.Group>                
                  </Row>

                  <Row>
                    <Form.Group as={Col} className="mb-3" controlId="strokeSizeInput">
                      <Form.Label>Stroke Size</Form.Label>
                      <Form.Control type="text" title="Stroke Size" placeholder='10' />
                    </Form.Group>                
                    <Form.Group as={Col} className="mb-3" >
                      <Form.Label>Cursor Size</Form.Label>
                      <Form.Control type="text" id="strokeSizeInputHorizontal" placeholder="Horizontal Stroke Size" title="Stroke Size (H)" />
                      <Form.Control type="text" id="strokeSizeInputVertical" placeholder="Vertical Stroke Size" title="Stroke Size (V)" />
                    </Form.Group>                
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Size</Form.Label>
                      <Form.Range />
                    </Col>
                    <Col>
                      <Form.Label>Opacity</Form.Label>
                      <Form.Range />
                    </Col>
                    <Col>
                      <Form.Label>Delay</Form.Label>
                      <Form.Range />
                    </Col>
                  </Row>
                </Form>

                {/* <DropdownButton id="dropdown-basic-button" title="Fill Colour">
                    <Dropdown.Item href="#/white">White</Dropdown.Item>
                    <Dropdown.Item href="#/red">Red</Dropdown.Item>
                    <Dropdown.Item href="#/green">Green</Dropdown.Item>                    
                </DropdownButton> */}
                {/* <DropdownButton id="dropdown-basic-button" title="Stroke Colour">
                    <Dropdown.Item href="#/white">White</Dropdown.Item>
                    <Dropdown.Item href="#/red">Red</Dropdown.Item>
                    <Dropdown.Item href="#/green">Green</Dropdown.Item>                    
                </DropdownButton> */}

              </div>


              {/* <div>
                <h4>Effects</h4> 
                  <Form>
                    <Form.Select aria-label="Fill Colour">
                      <option></option>
                      <option value="white">White</option>
                      <option value="red">Red</option>
                      <option value="green">Green</option>
                    </Form.Select>

                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Check this switch"
                    />

                  </Form>
                </div>
              <div>Accessibility</div> */}


            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="layer2">
            <Accordion.Header>Layer 2</Accordion.Header>
            <Accordion.Body>
              Layer 2 TBC
            </Accordion.Body>
          </Accordion.Item>


        </Accordion>        

        <div>          
          <Button>Reset to Default</Button>       

        </div>

      </div>
      

    </div>

  )
}



