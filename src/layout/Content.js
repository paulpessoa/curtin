import React from 'react';
import styles from './Content.module.css';


function Content() {
const saveQR = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Qr-2.svg/1024px-Qr-2.svg.png"

  function submitUrl (e) {
        e.preventDefault()
        document.getElementById("box_short_url").style.display = "flex";
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
            <input type="url" name="link" placeholder='Type or paste long URL here...' />
            <div className={styles.custom_link}>
                <input type="url" name="link" placeholder='curtin.com/CUSTOMLINK' />
                <button className="buttonStandard" type='submit'>Shorten</button>
            </div>
          </form>

          <div id='box_short_url' className={styles.box_short_url}>
            <input id="url_curta" type="text" name="link" placeholder='curtin.com/CUSTOMLINK'/>
            <button onClick={copyButton}>Copy</button>
            <button onClick={copyButton}>Clear</button>
            <button onClick={displayQR}>QR Code</button>
          </div>

          <div id='box_qrcode' className={styles.box_qrcode}>
            <div className={styles.qrcode_image}>
              <img src={saveQR}/>
            </div>

            <a href={saveQR} target="_blank" type='image/png' download="image/png"> 
              <button type='submit'>Download QR Code</button>
            </a>  
            
          </div>

        </div>
    </div>
  );
}

export default Content;
