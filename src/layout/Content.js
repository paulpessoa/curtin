import React from 'react';
import styles from './Content.module.css';
import axios from 'axios';


function Content() {
  //This function sends longURL to the server.
  async function submitUrl (e) {
      e.preventDefault()
      document.getElementById("box_short_url").style.display = "flex";
      const longURL = document.getElementById('long_url').value;
      const hashURL = document.getElementById('hash_url').value;
      const url = `https://curtin.herokuapp.com/shorten/?url=${longURL}&hash=${hashURL}`;
      let resURL
      let ErrorServer 
     await axios.post(url) 
      .then((res) => {
        resURL = res.data 
      //  console.log(resURL)
    })
    .catch((error) => {
      ErrorServer = error.response.data.error.message;
      //console.error('Aqui é o catch', error.response.data.error.message)
      document.getElementById("hash_url").style.border = "red dashed 2px";
      document.getElementById("spanError").style.display = "block";
    })    
    if (!ErrorServer) {
      getShortUrl(e, resURL)
    }
  } 
  
  function getShortUrl (e,resURL) {
    e.preventDefault()
     document.getElementById("spanError").style.display = "none";
     document.getElementById("url_short").value = resURL.shortened_url;
     document.getElementById("qrCode").src = resURL.qr_code_url;
     document.getElementById("hash_url").style.border = "#f0f0f0 solid 2px";    
     document.getElementById("url_short").style.border = "#f0f0f0 solid 2px";    
    }
    
    //This function copy the shorURL input value.
    function copyButton(e) {
      e.preventDefault()
      let urlCurta = document.getElementById("url_short");
      urlCurta.select();
      urlCurta.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.getElementById("url_short").style.border = "#00b600 dashed 2px";
    }   
    
    
    //This function refresh the page.
    function clearButton () {
      window.location.reload()
    }
    
    //This function show the QR Code.
    function qrButton (e) {
      e.preventDefault()
      document.getElementById("box_qrcode").style.display = "flex";        
      document.getElementById("hash_url").style.border = "#f0f0f0 solid 2px";    
      document.getElementById("url_short").style.border = "#f0f0f0 solid 2px";    
    }
    //This function download the QR Code image file.
    function qrDownload () {
      alert('Função em Desenvolvimento')   
    }

      return (
        <div className={styles.content}>
        <div className={styles.box_content}>          
          <form className={styles.form} onSubmit={submitUrl} method="post">
            
            <input id="long_url" type="url" name="link" placeholder='Type or paste long URL' required/>
            <div className={styles.custom_link}>
                <input id="hash_url" type="text" name="link" placeholder='curtin.com/CUSTOMLINK' />
                <button className="buttonStandard" type='submit' >Shorten</button>
            </div>

            <div id='spanError' className={styles.spanError}>
                <span>This name already exists!</span>
            </div>

          </form>

          <div id='box_short_url' className={styles.box_short_url}>
            <input id="url_short" type="text" name="link" placeholder='curtin.com/CUSTOMLINK'/>
            <button onClick={copyButton}>Copy</button>
            <button onClick={clearButton}>Clear</button>
            <button onClick={qrButton}>QR Code</button>
          </div>

          <div id='box_qrcode' className={styles.box_qrcode}>
            <div className={styles.qrcode_image}>
              <img id='qrCode' alt="QR_CODE"/>
            </div>

            <a id="linkQR" href="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=https://curtin.herokuapp.com/eieieieiei" target="_blank" rel="noopener noreferrer" type='image/png' download="image/png"> 
              <button onClick={qrDownload} type='submit'>Download QR Code</button>
            </a>            
          </div>

        </div>
    </div>
  );
}

export default Content;






/* 



    


      */
     