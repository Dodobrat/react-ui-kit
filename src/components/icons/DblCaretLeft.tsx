import * as React from "react";

function SvgDblCaretLeft(
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
        <path d="M30 0v30H0V0z" />
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M15 5L5 15l10 10M25 5L15 15l10 10" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgDblCaretLeft);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
