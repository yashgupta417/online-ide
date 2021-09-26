import axios from "axios";
const BASE_URL = "https://onlinejudge-env.eba-n3rv32mp.us-east-1.elasticbeanstalk.com/api"
const JUDGE_API_URL = `${BASE_URL}/judge`

export async function runCode(language, sourceFile, inputFile) {    
    let formdata = new FormData();
    formdata.append("language", language);
    formdata.append("source", sourceFile);
    formdata.append("input", inputFile);
    formdata.append("timeLimit",5)
    formdata.append("memoryLimit",1000*1000*256)

    const headers = {
        "Content-Type": "multipart/form-data"
    }
    
    let reqOptions = {
      url: JUDGE_API_URL,
      method: "POST",
      data: formdata,
      headers: headers,
      timeout: 10000,
    }
    console.log("Going to send request....", reqOptions)
    const res = await axios(reqOptions)
    console.log(res)
    return res.data
}
