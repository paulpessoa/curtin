import React from 'react';
import styles from './Content.module.css';
import axios from 'axios';

function Content() {
  
  
  async function submitUrl (e) {
      e.preventDefault()
      document.getElementById("box_short_url").style.display = "flex";
      const longURL = document.getElementById('long_url').value;
      const hashURL = document.getElementById('hash_url').value;
      
      const url = `https://curtin.herokuapp.com/shorten/?url=${longURL}&hash=${hashURL}`;
      let resURL
     await axios.post(url) 
      .then((res) => {
        resURL = res.data 
        console.log(resURL)
      })
      .catch( (error) => {
        console.error(Error(error))
      }) 
      
      getShortUrl(e, resURL)
      
    } 
    
    function getShortUrl (e,resURL) {
      e.preventDefault()
      document.getElementById("url_curta").value = resURL.shortened_url;
      document.getElementById("qrCode").src = resURL.qr_code_url;
      
      }
      

      function copyButton(e) {
        e.preventDefault()
        let urlCurta = document.getElementById("url_curta");
        urlCurta.select();
        urlCurta.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.getElementById("url_curta").style.border = "#00b600 dashed 2px";
      }

      function displayQR (e) {
        e.preventDefault()
        document.getElementById("box_qrcode").style.display = "flex";        
      }


      return (





        <div className={styles.content}>
        <div className={styles.box_content}>
          
          <form className={styles.form} onSubmit={submitUrl} method="post" id="" action="">
            <input id="long_url" type="url" name="link" placeholder='Type or paste long URL here...' />
            <div className={styles.custom_link}>
                <input id="hash_url" type="text" name="link" placeholder='curtin.com/CUSTOMLINK' />
                <button className="buttonStandard" type='submit' >Shorten</button>
            </div>
          </form>

          <div id='box_short_url' className={styles.box_short_url}>
            <input id="url_curta" type="text" name="link" placeholder='curtin.com/CUSTOMLINK'/>
            <button onClick={copyButton}>Copy</button>
            <button >Clear</button>
            <button >QR Code</button>
          </div>

          <div id='box_qrcode' className={styles.box_qrcode}>
            <div className={styles.qrcode_image}>
              <img id='qrCode' alt="QR_CODE"/>
            </div>

            <a href="https://google.com.br" target="_blank" rel="noopener noreferrer" type='image/png' download="image/png"> 
              <button type='submit'>Download QR Code</button>
            </a>            
          </div>

        </div>
    </div>
  );
}

export default Content;






/* 



    


      */
     