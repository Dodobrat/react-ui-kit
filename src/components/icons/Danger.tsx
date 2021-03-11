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
      viewBox="0 0 30 30"
      aria-label="icon"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none">
        <path d="M0 0h30v30H0z" />
        <path
          d="M15 5l10 20H5z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M15 13.327v4M15 20.463v.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgDanger);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
