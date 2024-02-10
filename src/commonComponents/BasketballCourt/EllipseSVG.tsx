import { observer } from "mobx-react-lite";

type EllipseSVGProps = {
    svgButtonId: string,
    ellipseId: string,
    defaultFill: string,
    defaultStroke: string,
    ifSelectedFill: string
    isSelected: (id:string) => boolean,
    onClick: (id: string) => void,
    cx?: string
    cy?: string
    rx?: string
    ry?: string
}
function EllipseSVG(props: EllipseSVGProps) {

    const {
    svgButtonId,
    ellipseId,
    defaultFill,
    defaultStroke,
    ifSelectedFill,
    isSelected,
    onClick,
    cx,
    cy,
    rx,
    ry,
    } = props

    return (
        <ellipse
            onClick={() => {onClick(svgButtonId)}}
            id={ellipseId}
            cx={cx ? cx : "799.578"}
            cy={cy ? cy : "349.933"}
            fill={isSelected(svgButtonId) ? defaultFill : ifSelectedFill}
            fillOpacity="1"
            stroke={defaultStroke}
            rx={rx ? rx : "15.007"}
            ry={ry ? ry : "15.731"}
        ></ellipse>
    );
}

export default observer(EllipseSVG);