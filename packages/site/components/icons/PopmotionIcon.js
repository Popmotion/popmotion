import BrandGradient from "./BrandGradientDef";

export default ({ className, width = 41, height = 37 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 41 37"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <BrandGradient id="icon-gradient" />
    <g fill="none" fillRule="evenodd">
      <ellipse
        fill="url(#icon-gradient)"
        cx="17.73"
        cy="18.99"
        rx="17.73"
        ry="18.01"
      />
      <path
        d="M17.82.02h12.9c6.67 0 10.18 4.5 10.18 10.12 0 6.4-4.57 12.2-12.5 12.2h-4.95l-1.1 11H14.4L17.82.02zM29.65 7.6h-4.67l-.8 7.57h4.5c2.7 0 4.3-1.8 4.3-4.2 0-1.7-1.07-3.37-3.33-3.37z"
        fill="#FFF"
      />
    </g>
  </svg>
);
