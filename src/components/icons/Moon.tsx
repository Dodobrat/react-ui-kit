import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMoon(
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
          d="M11.982 22a10 10 0 01-9.965-9.158 6 6 0 105.476-9.78A9.9 9.9 0 0111.982 2a10 10 0 110 20z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgMoon);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
