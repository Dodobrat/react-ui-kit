import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgDanger(
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
      <g fill="none">
        <path d="M0 0h24v24H0z" />
        <g
          transform="translate(-156 -81)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
        >
          <path d="M168 88.5v6M168 97.5v.5" />
          <circle
            cx={10}
            cy={10}
            r={10}
            transform="translate(158 83)"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgDanger);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
