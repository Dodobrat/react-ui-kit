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
        <circle
          cx={6}
          cy={6}
          r={6}
          transform="translate(213 140)"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={4}
        />
        <path
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M218 136h2v3h-2zM218 153h2v3h-2zM209 145h3v2h-3zM226 145h3v2h-3zM225.586 138l1.414 1.414-2.121 2.122-1.414-1.415zM213.121 150.464l1.414 1.414-2.121 2.122-1.414-1.415zM212.414 138l2.121 2.121-1.414 1.415-2.121-2.122zM224.879 150.464l2.121 2.121-1.414 1.415-2.121-2.122z"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgSettings);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
