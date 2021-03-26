import '../style/BurgerMenu.css';

interface Props {
    handleClick: () => void;
    value: boolean;
}

function BurgerMenu(props: Props) {
    return(
        <div className="burger-container" onClick={props.handleClick}>
            <div 
                style={{
                    transform: props.value ? "rotate(-45deg) translate(-0.3rem, 0.4rem)" : "rotate(0deg)"
                }}>
            </div>
            <div 
                style={{
                    opacity: props.value ? "0" : "1"
                }}>
            </div>
            <div 
                style={{
                    transform: props.value ? "rotate(45deg) translate(-0.3rem, -0.4rem)" : "rotate(0deg)"
                }}>
            </div>
        </div>
    );
}

export default BurgerMenu;