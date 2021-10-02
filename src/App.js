import './App.css';
import Editor from './components/Editor/editor'
import Input from './components/Input/input';
import Output from './components/Output/output';
import NavBar from './components/NavBar/navBar';
import { useState } from 'react';
import {runCode} from './api'

function App() {
  const [source, setSource] = useState("")
  const [input, setInput] = useState("")
  const [language, setLanguage] = useState("c++")
  const [isRunning, setRunning] = useState(false)
  const [outputData, setOutputData] = useState({})

  const allLanguages = {
    // "javascript": {
    //   aceName: "javascript",
    //   extension: "js"
    // },
    "python": {
      aceName: "python",
      extension: "py"
    },
    "c++": {
      aceName: "c_cpp",
      extension: "cpp"
    }
  }

  const sourceChanged = (value) => {
    setSource(value)
    console.log("source updated.")
  } 

  const inputChanged = (event) => {
    setInput(event.target.value)
    console.log("input updated.")
  }

  const languageChanged = (language) => {
    setLanguage(language.value)
    console.log("language updated.")
  }

  async function run() {
    setRunning(true)
    const sourceFile = new File([source],`source.${allLanguages[language].extension}`,{type: "text/plain"})
    const inputFile = new File([input],'input.txt',{type: "text/plain"})
    try {
      const outputData = await runCode(language, sourceFile, inputFile)
      setOutputData(outputData)
    } catch(err) {
      setOutputData({
        status: "FAILED",
        output: ""
      })
    }
    setRunning(false)
  }

  return (
    <div className="App">
      <NavBar languageChanged={languageChanged} run={run} languages={Object.keys(allLanguages)} isRunning={isRunning}></NavBar>
      <div className="container">
        <Editor sourceChanged={sourceChanged} language={allLanguages[language].aceName}></Editor>
        <Input inputChanged={inputChanged}></Input>
        <Output data={outputData}></Output>
      </div>
    </div>
  );
}

export default App;
