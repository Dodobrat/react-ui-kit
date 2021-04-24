import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgIconArrowRight(
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
        <path d="M0 24V0h24v24z" />
        <g stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
          <path d="M11.914 22L22 12 11.914 2" strokeLinejoin="round" />
          <path d="M22 12H2" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconArrowRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
