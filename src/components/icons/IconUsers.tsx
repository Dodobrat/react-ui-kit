import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgIconUsers(
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
        <g
          transform="translate(-207 -180.02)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <ellipse
            cx={3}
            cy={3.5}
            rx={3}
            ry={3.5}
            transform="translate(214 186.02)"
          />
          <path d="M225 202.02h-16c0-3.86 3.589-7 8-7s8 3.14 8 7z" />
        </g>
        <path
          d="M22 22h-4c0-3.193-2.467-5.98-6-6.779A9.084 9.084 0 0114 15c4.411 0 8 3.14 8 7zm-8-9a2.767 2.767 0 01-2-.891 3.9 3.9 0 000-5.218A2.766 2.766 0 0114 6a3.283 3.283 0 013 3.5 3.283 3.283 0 01-3 3.5z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconUsers);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
