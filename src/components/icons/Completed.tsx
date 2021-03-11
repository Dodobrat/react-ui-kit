import * as React from "react";

function SvgCompleted(
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
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M25.5 14.947V25h-20V5h14.971" />
          <path d="M25.5 5l-9.75 13.473-4.6-4.6" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCompleted);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
