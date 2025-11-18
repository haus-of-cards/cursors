// Component to display the code generated for the Demo Cursor

import { useState } from "react";
import { PiCheck, PiClipboardBold } from "react-icons/pi";

// Local imports
import * as styles from "./CursorCodeDisplay.css"; // VE style file

// Main component
export default function CursorCodeDisplay({ demoCursor }) {
  const [copied, setCopied] = useState(false);

  const jsonToJsxProps = (obj, indent = 2) => {
    const spaces = " ".repeat(indent);

    return `<ReactCursor\n${Object.entries(obj)
      .filter(([key]) => key !== "enable") // Exclude "enable"
      .map(([key, value]) => {
        if (typeof value === "string") {
          return `${spaces}${key}="${value}"`;
        } else if (typeof value === "number" || typeof value === "boolean") {
          return `${spaces}${key}={${value}}`;
        } else if (Array.isArray(value) || typeof value === "object") {
          // Recursively stringify objects/arrays
          const nested = JSON.stringify(value, null, indent)
            .replace(/"([^"]+)":/g, "$1:") // remove quotes from keys
          return `${spaces}${key}={${nested}}`;
        } else {
          return `${spaces}${key}={${value}}`;
        }
      })
      .join("\n")}\n/>`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonToJsxProps(demoCursor, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  // Markup
  return (
    <div className={styles.codeDiv}>
      <pre>
        <code>{jsonToJsxProps(demoCursor, 2)}</code>
      </pre>
      <button className={styles.clipboard} onClick={handleCopy}>
        {copied ? <PiCheck /> : <PiClipboardBold />}
      </button>
    </div>
  );
}
