import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMoon(
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
      <path
        data-name="Subtraction 1"
        d="M12.356 25.5A10.007 10.007 0 017.5 24.244a5.182 5.182 0 001.606.256c3.722 0 6.75-4.037 6.75-9s-3.028-9-6.75-9a5.182 5.182 0 00-1.606.256A10 10 0 1112.356 25.5z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgMoon);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
