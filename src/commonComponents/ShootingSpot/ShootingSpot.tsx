type ShootingSpotProps = {
    isClicked: boolean,
    handlerOnClick: (id: string) => void,
    spotIndex: string
}

export default function ShootingSpot({isClicked, handlerOnClick, spotIndex} : ShootingSpotProps) {

    const borderColor = isClicked ? 'green' : 'red';

    return (
        <button style={{borderColor}} onClick={() => {handlerOnClick(spotIndex)}}>
            
        </button>
    )
}