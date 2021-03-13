import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCompleted(
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
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M22 11.947V22H2V2h14.971" />
          <path d="M22 2l-9.75 13.473-4.6-4.6" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCompleted);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
