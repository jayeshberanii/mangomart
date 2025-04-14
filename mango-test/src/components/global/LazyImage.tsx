import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "../../assets/product-fallback.png";

const LazyImage = (props: {
  src?: string;
  height?: number;
  width?: number;
  className?: string;
  alt: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}) => (
  <LazyLoadImage
    height={props.height}
    width={props.width}
    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const target = e.currentTarget;
      target.onerror = null;
      target.src = Image;
    }}
    {...props}
    src={props.src ?? Image}
  />
);

export default LazyImage;
