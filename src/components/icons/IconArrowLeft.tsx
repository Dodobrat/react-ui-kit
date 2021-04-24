import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgIconArrowLeft(
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
        <g stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
          <path d="M12.086 2L2 12l10.086 10" strokeLinejoin="round" />
          <path d="M2 12h20" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconArrowLeft);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
