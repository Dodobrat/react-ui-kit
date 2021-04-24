import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgIconSearch(
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
        <path
          d="M15 15l7 7zm-10.7-.09a7.5 7.5 0 115.3 2.2 7.5 7.5 0 01-5.3-2.2z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconSearch);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
