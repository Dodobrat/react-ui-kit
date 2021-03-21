import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSettings(
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
      <g transform="translate(-207 -134)" fill="none">
        <path d="M231 134v24h-24v-24z" />
        <path
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M218 136h2v2h-2zM218 154h2v2h-2zM209 145h2v2h-2zM227 145h2v2h-2zM225.586 138l1.414 1.414-1.414 1.414-1.414-1.414zM212.414 151.172l1.414 1.414-1.414 1.414-1.414-1.414zM212.414 138l1.414 1.414-1.414 1.414-1.414-1.414zM225.586 151.172l1.414 1.414-1.414 1.414-1.414-1.414z"
        />
        <circle
          cx={8}
          cy={8}
          r={8}
          transform="translate(211 138)"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <circle
          cx={2.5}
          cy={2.5}
          r={2.5}
          transform="translate(216.5 143.5)"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgSettings);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
