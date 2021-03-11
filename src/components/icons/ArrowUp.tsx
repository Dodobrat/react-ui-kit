import * as React from "react";

function SvgArrowUp(
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
        <path d="M30 30H0V0h30z" />
        <g stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
          <path d="M25 15.086L15 5 5 15.086" strokeLinejoin="round" />
          <path d="M15 5v20" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowUp);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
