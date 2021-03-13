import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMore(
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
      <path fill="none" d="M0 0h24v24H0z" />
      <g transform="translate(-47.5 -80.5)" stroke="currentColor">
        <circle cx={1.5} cy={1.5} r={1.5} transform="translate(49.5 91)" />
        <circle cx={1.5} cy={1.5} r={1.5} transform="translate(58 91)" />
        <circle cx={1.5} cy={1.5} r={1.5} transform="translate(66.5 91)" />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgMore);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
