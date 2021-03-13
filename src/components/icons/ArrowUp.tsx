import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgArrowUp(
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
        <path d="M24 24H0V0h24z" />
        <g stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
          <path d="M22 12.086L12 2 2 12.086" strokeLinejoin="round" />
          <path d="M12 2v20" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgArrowUp);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
