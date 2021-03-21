import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgClock(
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
      <g transform="translate(-315 -134)" fill="none">
        <path d="M315 134h24v24h-24z" />
        <circle
          cx={10}
          cy={10}
          r={10}
          transform="translate(317 136)"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
          d="M327 140v6M330.83 149.214L327 146"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgClock);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
