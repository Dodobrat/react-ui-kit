import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgInfo(
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
