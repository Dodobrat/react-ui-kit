import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgArrowLeft(
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
        <g stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
          <path d="M15.086 5L5 15l10.086 10" strokeLinejoin="round" />
          <path d="M5 15h20" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowLeft);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
