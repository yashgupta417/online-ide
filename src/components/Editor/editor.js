import { useEffect } from 'react';
import './editor.css'

function Editor(props) {
    const sourceChanged = props.sourceChanged
    useEffect(() => {
        let editor = window.ace.edit("editor");
        editor.setTheme("ace/theme/clouds_midnight");
        editor.setHighlightActiveLine(false)
        editor.setValue("")
        editor.session.on('change',(delta) => {
            sourceChanged(editor.getValue())
        })
      }, [sourceChanged])

    useEffect(() => {
        let editor = window.ace.edit("editor");
        editor.session.setMode(`ace/mode/${props.language}`);
        console.log("Mode updated",props.language)
    },[props.language])

    return (
        <div className="editor-parent" id="editor">Hello world</div>
    )
}

export default Editor