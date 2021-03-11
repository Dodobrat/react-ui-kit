import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgArrowDown(
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
