import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgIconCalendar(
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
        <path
          d="M2 22V4h20v18zM17 3V2h1v1zM6 3V2h1v1z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path stroke="currentColor" strokeWidth={2} d="M2 9.5h20" />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconCalendar);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
