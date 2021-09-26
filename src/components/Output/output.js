import './output.css'

function Output(props) {

    const statusClass = props.data.status == "SUCCESS" ? "output-status-success" : "output-status-other"
    return (
        <div className="output-parent">
            <div className="output-header">
                <div className="output-title">Output</div>
                <div className={statusClass}>{props.data.status}</div>
            </div>
            <div className="output-text-box">{props.data.output}</div>
        </div>
    )
}

export default Output