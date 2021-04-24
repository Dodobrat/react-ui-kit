import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgIconCloseOutlined(
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
      <g transform="translate(-99 -234)" fill="none">
        <path d="M123 234v24H99v-24z" />
        <circle
          cx={10}
          cy={10}
          r={10}
          transform="translate(101 236)"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <g stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
          <path d="M107 242l8 8M107 250l8-8" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconCloseOutlined);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
