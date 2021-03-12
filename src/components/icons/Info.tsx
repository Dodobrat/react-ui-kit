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
      <g fill="none">
        <path data-name="Rectangle 9" d="M30 30H0V0h30z" />
        <g
          data-name="Group 13"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
          transform="rotate(180 91.5 54)"
        >
          <g data-name="Group 9">
            <path data-name="Path 10" d="M168 88.5v6" />
            <path data-name="Path 11" d="M168 97.5v.5" />
          </g>
          <circle
            data-name="Ellipse 4"
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

const ForwardRef = React.forwardRef(SvgInfo);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;