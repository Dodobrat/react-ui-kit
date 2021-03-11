import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgArrowRight(
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
        <g stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
          <path d="M14.914 25L25 15 14.914 5" strokeLinejoin="round" />
          <path d="M25 15H5" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
