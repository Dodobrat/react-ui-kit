import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgDblCaretRight(
  { title, titleId, ...props }: React.SVGProps<SVGSVGElement> & SVGRProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 30 30"
      aria-label="icon"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none">
        <path d="M0 30V0h30v30z" />
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M15 25l10-10L15 5M5 25l10-10L5 5" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgDblCaretRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
