import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgIconMore(
  { title, titleId, ...props }: React.SVGProps<SVGSVGElement> & SVGRProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      aria-label="dui_icon"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g transform="rotate(90 160.5 97.5)" fill="none">
        <path d="M87 234v24H63v-24z" />
        <circle
          cx={1.5}
          cy={1.5}
          r={1.5}
          transform="rotate(90 -80 156.5)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
        />
        <circle
          cx={1.5}
          cy={1.5}
          r={1.5}
          transform="rotate(90 -84 160.5)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
        />
        <circle
          cx={1.5}
          cy={1.5}
          r={1.5}
          transform="rotate(90 -88 164.5)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconMore);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
