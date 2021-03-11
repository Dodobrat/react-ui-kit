import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgDblCaretLeft(
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
