import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgIconCheckOutlined(
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
      <g transform="translate(-135 -234)" fill="none">
        <path d="M159 234v24h-24v-24z" />
        <circle
          cx={10}
          cy={10}
          r={10}
          transform="translate(137 236)"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M151 243.169l-5.663 5.663-2.337-2.337"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconCheckOutlined);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
