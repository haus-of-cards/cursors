import ReactCursor from "@holmesdev/cursors";
import { vars } from "../../styles/themes.css";

const CustomSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g>
      <path
        stroke="currentStroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M11 21 4 4l17 7-6.265 2.685a2 2 0 0 0-1.05 1.05L11 21Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

function MainCursor({ enable }) {
  return (
    <ReactCursor
      enable={enable}
      showSystemCursor={false}
      layers={[
        {
          SVG: CustomSvg,
          strokeSize: 10,
          fill: "black",
          stroke: vars.colors.brand,
          strokeSize: 25,
          size: { width: 25, height: 25 },
          hotspot: { x: 2, y: 3 },
          effects: {
            hover: {
              scale: 0.8,
              stroke: vars.colors.complementary,
            },
            click: {
              scale: 1.5,
            },
          },
        },
        {
          SVG: "circle",
          fill: vars.colors.brand,
          opacity: 0.2,
          size: { width: 60, height: 60 },
          delay: 100,
          effects: {
            hover: {
              SVG: "square",
              scale: 1.2,
              opacity: 0.3,
            },
            click: {
              scale: 1.5,
            },
          },
        },
      ]}
    />
  );
}

export default MainCursor;
