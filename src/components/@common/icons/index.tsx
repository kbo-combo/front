import { ComponentPropsWithoutRef } from 'react';
import theme from "../../../style/theme.style.ts";

export const ICONS = [
  'account-circle-line',
  'home-line',
  'left-month',
  'right-month',
  'rulebook',
  'combo-icon'
] as const;

type IconIds = (typeof ICONS)[number];

interface SvgIconsProps extends Omit<ComponentPropsWithoutRef<'svg'>, 'width' | 'height'> {
  icon: IconIds;
  size?: number;
  color?: string;
}

const SvgStroke = ({ icon, size = 24, color = theme.color.gray, ...rest }: SvgIconsProps) => {
  return (
    <svg fill="none" width={size} height={size} stroke={color} {...rest}>
      <use href={`#${icon}`} />
    </svg>
  );
};

export default SvgStroke;
