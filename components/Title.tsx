const Title = ({ props }: any) => {
    return (
        <h2>
            {props.title}
            <small className="text-xs block text-gray-500">
                {props.subtitle}
            </small>
        </h2>
    )
}

export default Title