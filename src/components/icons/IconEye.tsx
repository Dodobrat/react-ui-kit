import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgIconEye(
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
        <g
          transform="translate(-314.965 -84)"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path
            d="M332.627 91.657l4.349 4.349h0l-4.35 4.348a8 8 0 01-11.313 0l-4.349-4.348h0l4.35-4.35a8 8 0 0111.313 0z"
            strokeLinecap="round"
          />
          <circle cx={1.5} cy={1.5} r={1.5} transform="translate(325.5 94.5)" />
        </g>
        <path d="M24 0v24H0V0z" />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconEye);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
