import React from 'react';
import styles from './Home.module.css';
import axios from 'axios';


function Content() {
  //This function sends longURL to the server.
  async function submitUrl (e) {
      e.preventDefault()
   
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
      document.getElementById("box_short_url").style.display = "none";
      document.getElementById("box_qrcode").style.display = "none";        
    })    
    if (!ErrorServer) {
      getShortUrl(e, resURL)
      document.getElementById("box_short_url").style.display = "flex";
    }
  } 
  
  function getShortUrl (e,resURL) {
    e.preventDefault()
     document.getElementById("spanError").style.display = "none";
     document.getElementById("url_short").value = resURL.shortened_url;
     document.getElementById("qrCode").src = resURL.qr_code_url;
     document.getElementById("qr_link").href = resURL.shortened_url;
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
    function qrButton (e, resURL) {
      e.preventDefault()
      document.getElementById("box_qrcode").style.display = "flex";             
      document.getElementById("hash_url").style.border = "#f0f0f0 solid 2px";    
      document.getElementById("url_short").style.border = "#f0f0f0 solid 2px";    
    }
    //This function download the QR Code image file.
   async function qrDownload (imageSrc) {
      imageSrc = document.getElementById("qrCode").src;
      const image = await fetch(imageSrc)
      const imageBlog = await image.blob()
      const imageURL = URL.createObjectURL(imageBlog)
    
      const link = document.createElement('a')
      link.href = imageURL
      link.download = 'QR Code Curtin'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

    }
    
      return (
        <div className={styles.content}>
        <div className={styles.box_content}>          
          {/* ------ CUSTOM AND SEND URL ------ */}
          <form className={styles.form} onSubmit={submitUrl} method="post">
            <input id="long_url" type="url" name="link" placeholder='Type or paste long URL' required/>
            <div className={styles.custom_link}>
                <input id="hash_url" type="text" name="link" placeholder='Custom Link (Optional)' />
                <button className="buttonStandard" type='submit' >Shorten</button>
            </div>
            <div id='spanError' className={styles.spanError}>
                <span>This name already exists!</span>
            </div>
          </form>
          {/* ------ URL SHORTENED BOX ------ */}
          <div id='box_short_url' className={styles.box_short_url}>
            <input id="url_short" type="text" name="link" placeholder='curtin.com/CUSTOMLINK'/>
            <button onClick={copyButton}>Copy</button>
            <button onClick={clearButton}>Clear</button>
            <button onClick={qrButton}>QR Code</button>
          </div>
          {/* ------ QR CODE BOX ------ */}
          <div id='box_qrcode' className={styles.box_qrcode}>
              <div className={styles.qrcode_image}>
                  <a id="qr_link" href="https://" target="_blank" rel="noopener noreferrer">  
                      <img id='qrCode' alt="QR_CODE"/>
                  </a>            
              </div>    
              <button onClick={qrDownload} type='submit'>Download QR Code</button>       
          </div>
        </div>
    </div>
  );
}

export default Content;






/* 



    


      */
     