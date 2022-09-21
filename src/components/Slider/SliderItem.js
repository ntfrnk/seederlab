import './Slider.scss';

const SliderItem = ({ item, device }) => {

    return (
        <div className="item">
            <img src={ device === 'mobile' ? item.picture.mobile_lg : item.picture.desktop_lg} className="img-fluid" />
            { item.title !== ""
                ?   <div className="caption">
                        <h1>{ item.title }</h1>
                        <p>{ item.summary }</p>
                    </div>
                : ''
            }
        </div>
    );
}

export default SliderItem;