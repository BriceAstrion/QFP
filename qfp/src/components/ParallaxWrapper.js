import { useParallax } from "react-scroll-parallax";

const ParallaxWrapper = ({
                             children,
                             rotateStart,
                             rotateEnd,
                             scaleStart,
                             scaleEnd,
                             opacityStart,
                             opacityEnd,
                             speed,
                             className,
                         }) => {
    const { ref, style } = useParallax({
        rotate: [rotateStart, rotateEnd],
        easing: "easeInOutCirc",
        scale: [scaleStart, scaleEnd],
        opacity: [opacityStart, opacityEnd],
        speed: { speed },
    });

    return (
        <div className={className} ref={ref} style={style}>
            {children}
        </div>
    );
};

export default ParallaxWrapper;