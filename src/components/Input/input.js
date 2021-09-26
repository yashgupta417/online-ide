import './input.css'

export default function Input(props) {
    return (
        <div className="input-parent">
            <div className="input-title">Input</div>
            <textarea className="input-text-box" type="text" onChange={props.inputChanged} placeholder="Enter input here..."/>
        </div>
    )
}