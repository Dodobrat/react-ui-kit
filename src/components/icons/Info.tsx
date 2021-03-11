import * as React from "react";

function SvgInfo(
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
      <g transform="translate(-153 -78)" fill="none">
        <path d="M153 78h30v30h-30z" />
        <g stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
          <path d="M168 88.5v6M168 97.5v.5" />
        </g>
        <circle
          cx={10}
          cy={10}
          r={10}
          transform="translate(158 83)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgInfo);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
