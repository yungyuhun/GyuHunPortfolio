import NotionIcon from "./NotionIcon";
import ScrollIcon from "./ScrollIcon";

export interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Icon = (Component: React.ComponentType<IconProps>) => {
  return ({ size = 16, color = "white", className = "" }: IconProps) => (
    <Component size={size} color={color} className={className} />
  );
};

export const Notion = Icon(NotionIcon);
export const Scroll = Icon(ScrollIcon);

export { NotionIcon, ScrollIcon };
