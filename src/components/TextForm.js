import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
    const [text, setText] = useState('Enter Here')
    const clickUper = () => {
        console.log('cliked uper button')
        let uper = text.toUpperCase();
        setText(uper);
        props.showAlert('Convert to Upercase','success');
    }

    const clickLower = () => {
        console.log('cliked Lower button')
        let lower = text.toLowerCase();
        setText(lower);
        props.showAlert('Convert to Lowercase','success');

    }
    const clickRepeat = () => {
        console.log('cliked Repeat button')
        let repeat = text.repeat(2);
        setText(repeat);
        props.showAlert('Copied to Clipboard','success');

    }
    const handelOnChange = (event) => {
        console.log('changers occured');
        setText(event.target.value);
    }
    function countWords(str) {
        str = str.replace(/(^\s*)|(\s*$)/gi, "");
        str = str.replace(/[ ]{2,}/gi, " ");
        str = str.replace(/\n /, "\n");
        return str.split(' ').length;
    }
    //  this word counter function
    
    // function count_word(val) {
    //     var wom = val.match(/\S+/g);
    //     return {
    //         words: wom ? wom.length : 0
    //     };
    // }
    // var textContent = document.getElementById("textcontent");
    // var showWordCount = document.getElementById("countWord");
    // textContent.addEventListener("input", function () {
    //     var v = count_word(this.value);
    //     showWordCount.innerHTML = (
    //         "<br>Words: " + v.words
    //     );
    // }, false);

    return (
        <div>
            <div className="mb-2 my-2" style={{color: props.mode==="dark"?"white":"black"}}>
                <h1>{props.heading1} </h1>
                <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white" ,color: props.mode==="dark"?"white":"black"}} id="exampleFormControlTextarea1" rows="6"></textarea>
                <button type="button" className="btn btn-primary" onClick={clickUper}>UperCase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={clickLower}>LowerCase</button>
                <button type="button" className="btn btn-primary" onClick={clickRepeat}>Repeat</button>
            </div>
            <div style={{color: props.mode==="dark"?"white":"black"}} >
                <h1>Text Review</h1>
                <p>Number Of Charters :{text.replace(/\s/g, "").length} <br /> Number Of Words : {countWords(text)}  </p>
            </div>
        </div>
    );
}
