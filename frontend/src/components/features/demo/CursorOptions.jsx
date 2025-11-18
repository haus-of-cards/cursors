import React from "react";

// Node imports
import {
  Button,
  Accordion,
  Dropdown,
  DropdownButton,
  Form,
  Row,
  Col,
  InputGroup,
  AccordionBody,
} from "react-bootstrap";

// Local imports
import * as styles from "./CursorOptions.css"; // Vanilla Extract styling file
import { layer } from "@vanilla-extract/css";
import { defaultLayer } from "../../../pages/DemoPage";
import { PiTrash } from "react-icons/pi";

// Main component
export default function CursorOptions({ demoCursor, setDemoCursor }) {
  // Functions

  // Handle option changes
  // function handleShowSystemCursorSwitch(e){
  function handleShowSystemCursorToggle() {
    setDemoCursor({
      ...demoCursor,
      showSystemCursor: !demoCursor.showSystemCursor,
    }); // Spread operator to copy the other fields and then toggle
  }

  // Update the shape within the layers array of the cursor object
  function handleMixBlendModeChange(e) {
    setDemoCursor({ ...demoCursor, mixBlendMode: e.target.value }); // Take a copy of demoCursor State and update with the new layer
  }

  function handleLayerShapeChange(e, layerIdx) {
    const layerValue = e.target.value;
    const newLayers = [...demoCursor.layers];
    newLayers[layerIdx].SVG = layerValue;
    setDemoCursor({
      ...demoCursor,
      layers: newLayers,
    });
  }

  function handleLayerFillChange(e, layerIdx) {
    const layerValue = e.target.value;
    const newLayers = [...demoCursor.layers];
    newLayers[layerIdx].fill = layerValue;
    setDemoCursor({
      ...demoCursor,
      layers: newLayers,
    });
  }

  function handleLayerStrokeChange(e, layerIdx) {
    const layerValue = e.target.value;
    const newLayers = [...demoCursor.layers];
    newLayers[layerIdx].stroke = layerValue;
    setDemoCursor({
      ...demoCursor,
      layers: newLayers,
    });
  }

  function handleLayerStrokeSizeChange(e, layerIdx) {
    const layerValue = e.target.value;
    const newLayers = [...demoCursor.layers];
    newLayers[layerIdx].strokeSize = Number(layerValue);
    setDemoCursor({
      ...demoCursor,
      layers: newLayers,
    });
  }

  function handleCursorLayerOpacityChange(e, layerIdx) {
    const layerValue = Number(e.target.value);
    const newLayers = [...demoCursor.layers];
    newLayers[layerIdx].opacity = layerValue;
    setDemoCursor({ ...demoCursor, layers: newLayers });
  }

  // Update changes in the cursor size
  function handleCursorSizeChanges(e, layerIdx) {
    const layerValue = Number(e.target.value);
    const newLayers = [...demoCursor.layers];
    const newSize = { ...newLayers[layerIdx].size };
    if (e.target.name === "cursorsizeh") {
      newSize.height = layerValue;
    } else if (e.target.name === "cursorsizew") {
      newSize.width = layerValue;
    }
    newLayers[layerIdx].size = newSize;
    setDemoCursor({ ...demoCursor, layers: newLayers });
  }

  function handleCursorLayerAspectToggle(e, layerIdx) {
    const newLayers = [...demoCursor.layers];
    newLayers[layerIdx].preserveAspectRatio =
      !newLayers[layerIdx].preserveAspectRatio;
    setDemoCursor({ ...demoCursor, layers: newLayers });
  }

  function handleCursorLayerDelayChange(e, layerIdx) {
    const layerValue = Number(e.target.value);
    const newLayers = [...demoCursor.layers];
    newLayers[layerIdx].delay = layerValue;
    setDemoCursor({ ...demoCursor, layers: newLayers });
  }

  function addNewLayer(e) {
    e.preventDefault();
    const newLayers = [
      ...demoCursor.layers,
      JSON.parse(JSON.stringify(defaultLayer)),
    ];
    setDemoCursor({
      ...demoCursor,
      layers: newLayers,
    });
  }

  function removeLayer(e, layerIdx) {
    e.preventDefault();
    const newLayers = demoCursor.layers.filter((_, idx) => idx !== layerIdx);
    setDemoCursor({
      ...demoCursor,
      layers: newLayers,
    });
  }

  // Markup
  return (
    <div className={styles.cursorOptionsDiv}>
      {/* Form wraps all configurable cursor options */}
      <Form>
        {/* Div containing all the Demo Cursor options */}
        <div className={styles.cursorMainAndLayerOptionsDiv}>
          {/* Main Options */}
          <div className={styles.cursorMainOptionsDiv}>
            <h4>Main Options</h4>
            <div>
              {/* Cursor Enable. Note: It is enabled by default so it can be used in the Testbed */}
              <InputGroup className="mb-1">
                <Form.Check
                  disabled
                  type="switch"
                  id="custom-switch"
                  label="Enable Cursor"
                  checked
                />
              </InputGroup>

              {/* System Cursor */}
              <InputGroup className="mb-1">
                <Form.Check
                  type="switch"
                  checked={demoCursor.showSystemCursor}
                  onChange={handleShowSystemCursorToggle}
                  id="show-system-cursor"
                  label="Show System Cursor"
                />
              </InputGroup>

              {/* mixBlendMode */}
              {/* <Form.Label>mixBlendMode</Form.Label> */}
              <InputGroup className="mb-3">
                <InputGroup.Text>mix-blend-mode</InputGroup.Text>
                <Form.Select
                  className={styles.selectFullWidth}
                  value={demoCursor.mixBlendMode}
                  onChange={(e) =>
                    handleMixBlendModeChange({
                      target: { name: "mixBlendMode", value: e.target.value },
                    })
                  }
                >
                  <option value="normal">normal</option>
                  <option value="multiply">multiply</option>
                  <option value="screen">screen</option>
                  <option value="overlay">overlay</option>
                  <option value="darken">darken</option>
                  <option value="lighten">lighten</option>
                  <option value="color-dodge">color-dodge</option>
                  <option value="color-burn">color-burn</option>
                  <option value="difference">difference</option>
                  <option value="exclusion">exclusion</option>
                  <option value="hue">hue</option>
                  <option value="saturation">saturation</option>
                  <option value="color">color</option>
                  <option value="luminosity">luminosity</option>
                </Form.Select>
              </InputGroup>

              {/* zIndex */}
              <InputGroup className="mb-3">
                <InputGroup.Text>z-index</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={demoCursor.zIndex}
                  min={-2147483648}
                  max={2147483647}
                  onChange={(e) =>
                    setDemoCursor({ ...demoCursor, zIndex: e.target.value })
                  }
                />
              </InputGroup>
            </div>
          </div>

          {/* Layer Options */}
          <div className={styles.cursorLayerOptionsDiv}>
            <h4>Layer Options</h4>
            {/* Use Accordion to show Layers */}
            {/* <Accordion defaultActiveKey="layer1"> */}
            <Accordion>
              {demoCursor.layers.map((layer, idx) => (
                <Accordion.Item eventKey={`layer${idx + 1}`} key={idx}>
                  <Accordion.Header>Layer {idx + 1}</Accordion.Header>
                  <Accordion.Body>
                    {/* Shape selection */}
                    <InputGroup className="mb-3">
                      <InputGroup.Text>Layer Shape</InputGroup.Text>
                      <Form.Select
                        className={styles.selectFullWidth}
                        value={layer.SVG}
                        onChange={(e) => handleLayerShapeChange(e, idx)}
                      >
                        <option value="arrow">arrow</option>
                        <option value="circle">circle</option>
                        <option value="cross">cross</option>
                        <option value="square">square</option>
                      </Form.Select>
                    </InputGroup>

                    {/* Colour selection */}
                    <Row className="mb-3">
                      <Col>
                        <Form.Group as={Row} controlId="fillColourInput">
                          <Form.Label column>Fill Color</Form.Label>
                          <Col>
                            <Form.Control
                              type="color"
                              value={layer.fill}
                              onChange={(e) => handleLayerFillChange(e, idx)}
                              name="fillcolour"
                              title="Fill Colour"
                            />
                          </Col>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group as={Row} controlId="strokeColourInput">
                          <Form.Label column>Stroke Color</Form.Label>
                          <Col>
                            <Form.Control
                              type="color"
                              value={layer.stroke}
                              onChange={(e) => handleLayerStrokeChange(e, idx)}
                              name="strokecolour"
                              title="Stroke Colour"
                            />
                          </Col>
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Sizes */}

                    <Form.Group>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Stroke Size</InputGroup.Text>
                        <Form.Control
                          type="number"
                          value={layer.strokeSize}
                          min={0}
                          onChange={(e) => handleLayerStrokeSizeChange(e, idx)}
                        />
                      </InputGroup>
                    </Form.Group>

                    <InputGroup className="mb-3">
                      <InputGroup.Text>Cursor Size (H x W) px</InputGroup.Text>
                      <Form.Control
                        type="number"
                        name="cursorsizeh"
                        value={layer.size.height}
                        onChange={(e) => handleCursorSizeChanges(e, idx)}
                        placeholder="Cursor Size (H)"
                        title="Cursor Size (H)"
                        min={1}
                      />
                      <Form.Control
                        type="number"
                        name="cursorsizew"
                        value={layer.size.width}
                        onChange={(e) => handleCursorSizeChanges(e, idx)}
                        placeholder="Cursor Size (W)"
                        title="Cursor Size (W)"
                        min={1}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Check
                        type="switch"
                        checked={layer.preserveAspectRatio}
                        onChange={(e) => handleCursorLayerAspectToggle(e, idx)}
                        id={`preserve-aspect-ratio:${idx}`}
                        label="Preserve Aspect Ratio"
                      />
                    </InputGroup>

                    <Form.Group>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Opacity</InputGroup.Text>
                        <Form.Control
                          type="number"
                          value={layer.opacity}
                          min={0}
                          max={1}
                          step={0.01}
                          onChange={(e) =>
                            handleCursorLayerOpacityChange(e, idx)
                          }
                        />
                      </InputGroup>
                    </Form.Group>

                    <InputGroup className="mb-3">
                      <InputGroup.Text>Delay</InputGroup.Text>
                      <Form.Control
                        type="number"
                        value={layer.delay}
                        min={0}
                        onChange={(e) => handleCursorLayerDelayChange(e, idx)}
                      />
                    </InputGroup>

                    {idx > 0 && (
                      <button
                        className={styles.remove}
                        onClick={(e) => removeLayer(e, idx)}
                      >
                        Remove Layer{" "}
                        <PiTrash style={{ pointerEvents: "none" }} />
                      </button>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
              {/* ABILITY TO ADD INFINITE LAYERS */}
              <button className={styles.add} onClick={addNewLayer}>
                Add Layer
              </button>
            </Accordion>
          </div>
        </div>
        <p className={styles.note}>
          Check the{" "}
          <a
            href="https://github.com/haus-of-cards/cursors/blob/main/README.md"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            README
          </a>{" "}
          for all options - including hover effects, custom SVGs, and more!
        </p>
      </Form>
    </div> // End of cursorOptionsDiv
  );
}
