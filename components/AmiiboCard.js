const AmiiboCard: React.FunctionComponent<any> = (props) => {
    function renderPrice() {
        if (props.price == 0) {
            return (
                <span className="price">Gratuit !</span>
            );
        } else {
            return (
                <span className="price">
                    {Math.trunc(props.price)}<sup>€{(props.price - Math.trunc(props.price)).toFixed(2).split('.')[1]}</sup>
                </span>
            );
        }
    }
    return (
        renderPrice()
    );
}

export default AmiiboCard;
