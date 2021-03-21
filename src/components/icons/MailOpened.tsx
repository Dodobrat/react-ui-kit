import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMailOpened(
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
          d="M2 8.001h0v-.02l9.984-5.98 10.016 6h0v.027l-9.984 7.973z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M22 22H2V8l10.016 8L22 8.026V22z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path d="M24 0v24H0V0z" />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgMailOpened);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
