import { tv } from "tailwind-variants";
import cx from "classnames";
const button = tv({
  base: "flex font-semibold w-full items-center mx-auto justify-center rounded-full gap-2",
  variants: {
    color: {
      green: "bg-primary-100 text-primary-shade-05",
      purple: "bg-secondary-shade-80 text-white",
    },
    size: {
      24: "py-1 px-2 h-8 text-sm",
      40: "py-[10px] px-6 h-10 text-sm",
      48: "py-[10px] px-6 h-12 text-sm",
      64: "py-[10px] px-6 h-16 text-sm",
    },
    fill: {
      true: "w-full",
      false: "w-fit",
      large: "w-[240px]",
    },
  },
  defaultVariants: {
    color: "purple",
    size: "48",
  },
});

function Button({
  color = "purple",
  className,
  children,
  size = 48,
  icon,
  fill = false,
  onClick,
}) {
  return (
    <button
      className={cx(className, button({ color, size, fill }))}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}

export default Button;
