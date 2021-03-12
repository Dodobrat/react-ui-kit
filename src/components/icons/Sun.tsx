import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSun(
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
      <path data-name="Rectangle 6" fill="none" d="M30 0v30H0V0z" />
      <g data-name="Group 37" stroke="currentColor">
        <g data-name="Ellipse 7" transform="translate(8 8)">
          <circle cx={7} cy={7} r={7} stroke="none" />
          <circle cx={7} cy={7} r={6.5} fill="none" />
        </g>
        <g data-name="Group 36" fill="none" strokeLinecap="round">
          <path data-name="Line 4" d="M15 5v2" />
          <path data-name="Line 5" d="M20 6l-1 2" />
          <path data-name="Line 7" d="M24 10l-2 1" />
          <path data-name="Line 5" d="M10 6l1 2" />
          <path data-name="Line 7" d="M6 10l2 1" />
          <path data-name="Line 6" d="M25 15h-2" />
          <path data-name="Line 4" d="M15 25v-2" />
          <path data-name="Line 5" d="M10 24l1-2" />
          <path data-name="Line 7" d="M6 20l2-1" />
          <path data-name="Line 5" d="M20 24l-1-2" />
          <path data-name="Line 7" d="M24 20l-2-1" />
          <path data-name="Line 6" d="M5 15h2" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgSun);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
