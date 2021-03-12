import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgWarning(
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
        <path data-name="Rectangle 8" d="M0 0h30v30H0z" />
        <g
          data-name="Group 35"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
        >
          <path
            data-name="Polygon 1"
            d="M15 5l10 20H5z"
            strokeLinejoin="round"
          />
          <g data-name="Group 34">
            <path data-name="Path 10" d="M15 13.327v4" />
            <path data-name="Path 11" d="M15 20.463v.5" />
          </g>
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgWarning);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
