import Star from "./Star";

const Stars = ({ count }) => {
    const starsLength = count > 0 && count <= 5 ? true : false;
    let starsArray = [];

    for (let i = 0; i < count; i++) {
        starsArray.push(1);
    }


    return (
        starsLength === true ?
        <ul className="card-body-stars u-clearfix">
            {starsArray.map((el, index) =>
                <Star key={index}/>
            )}
        </ul>
        : ""
    )
}

export default Stars