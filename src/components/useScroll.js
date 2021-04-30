import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const constrols = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    constrols.start("show");
  } else {
    constrols.start("hidden");
  }
  return [element, constrols];
};
