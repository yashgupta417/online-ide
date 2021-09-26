import './navBar.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function NavBar(props) {

    return (
        <div className="navbar-parent">
            <div><span className="logo-first">Code</span><span className="logo-second">Runner</span></div>
            <Dropdown className="lang-dropdown" options={props.languages} value={props.languages[0]}
                controlClassName="lang-dropdown-control" onChange={props.languageChanged}
            />
            { !props.isRunning ? <button className="run-button" onClick={props.run}>Run</button> :
                <div class="loader" display={!props.isRunning ? "none" : "block"}></div>
            }
        </div>
    )
}

export default NavBar