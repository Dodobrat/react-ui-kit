import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgWarning(
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
        <path d="M0 0h24v24H0z" />
        <path
          d="M12 2l10 20H2z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M12 10.327v4M12 17.463v.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgWarning);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
