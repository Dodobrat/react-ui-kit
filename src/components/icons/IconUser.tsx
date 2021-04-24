import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgIconUser(
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
      <g transform="translate(-207 -184)" fill="none">
        <path d="M231 184v24h-24v-24z" />
        <ellipse
          cx={4}
          cy={4.5}
          rx={4}
          ry={4.5}
          transform="translate(215 186)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M229 206h-20c0-4.412 4.486-8 10-8s10 3.588 10 8z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIconUser);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
