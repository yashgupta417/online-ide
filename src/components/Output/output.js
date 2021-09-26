import './output.css'

function Output(props) {
    return (
        <div className="output-parent">
            <div className="output-header">
                <div className="output-title">Output</div>
                <div className="output-status">{props.data.status}</div>
            </div>
            <div className="output-text-box">{props.data.output}</div>
        </div>
    )
}

export default Output