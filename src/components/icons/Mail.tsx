import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMail(
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
        <path d="M24 0v24H0V0z" />
        <path
          d="M2 4.5h20v.026L12.016 12.5z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2 4.5h20v15H2z"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgMail);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
