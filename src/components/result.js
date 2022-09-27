import '../style/result.css'

const SingleValue = function (props) {

    var classname = props.data.value == "Inclus" ? 'incl' : 'excl';

    return(
        <div>
            <a>{props.data.cityName}  -   </a>
            <a className={classname}>{props.data.value}</a>
        </div>
    )
}

export default SingleValue