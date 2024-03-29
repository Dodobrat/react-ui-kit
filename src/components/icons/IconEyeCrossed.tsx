import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgIconEyeCrossed(
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
      <g transform="translate(-315 -84)" fill="none">
        <path d="M339 84v24h-24V84z" />
        <path
          d="M332.663 91.657l4.349 4.349h0l-4.35 4.348a8 8 0 01-11.313 0L317 96.006h0l4.35-4.35a8 8 0 0111.313 0z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <circle
          cx={1.5}
          cy={1.5}
          r={1.5}
          transform="translate(325.535 94.5)"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
          d="M337.011 86.011l-20 20"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconEyeCrossed);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
