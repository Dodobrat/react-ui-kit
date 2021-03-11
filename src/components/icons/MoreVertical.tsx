import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMoreVertical(
  { title, titleId, ...props }: React.SVGProps<SVGSVGElement> & SVGRProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 30 30"
      aria-label="icon"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path fill="none" d="M30 0v30H0V0z" />
      <g transform="rotate(90 76 31.5)" stroke="currentColor">
        <circle cx={1.5} cy={1.5} r={1.5} transform="translate(49.5 91)" />
        <circle cx={1.5} cy={1.5} r={1.5} transform="translate(58 91)" />
        <circle cx={1.5} cy={1.5} r={1.5} transform="translate(66.5 91)" />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgMoreVertical);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
