import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgIconLockUnlocked(
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
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2 10h20v12H2z"
        />
        <path
          d="M13 18.5h-2l1-3a1 1 0 111-1 1 1 0 01-1 1l1 3z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M5 9.625V6a4 4 0 014-4h6a4 4 0 014 4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconLockUnlocked);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
