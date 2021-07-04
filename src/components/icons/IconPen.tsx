import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgIconPen(
  { title, titleId, ...props }: React.SVGProps<SVGSVGElement> & SVGRProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24.814 24.821"
      aria-label="dui_icon"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none">
        <path d="M.814 0h24v24h-24z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.057 1.929l2.828 2.828L8.743 18.9 5.915 16.07z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.057 1.929l2.828 2.828-2.828 2.829-2.828-2.829zM2.828 21.993l1.414-4.243L7.07 20.58z"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconPen);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
