import * as React from "react";

function SvgArrowDown(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 30 30"
      ref={svgRef}
      {...props}
    >
      <g fill="none">
        <path d="M0 0h30v30H0z" />
        <g stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
          <path d="M5 14.914L15 25l10-10.086" strokeLinejoin="round" />
          <path d="M15 25V5" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowDown);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
