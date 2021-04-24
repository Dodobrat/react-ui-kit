import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgIconSun(
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
          d="M9.64 19.646a8.019 8.019 0 01-5.287-5.287L2 12.005l2.348-2.348a8.018 8.018 0 015.309-5.309L12.005 2l2.354 2.353a8.019 8.019 0 015.287 5.287l2.365 2.365-2.37 2.37a8.018 8.018 0 01-5.266 5.266l-2.37 2.37z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M8.282 19.075H4.93V15.73a8.02 8.02 0 010-7.477V4.925h3.325a8.018 8.018 0 017.507 0h3.321V8.25a8.02 8.02 0 010 7.477v3.344h-3.354a8.017 8.017 0 01-7.448 0z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconSun);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
