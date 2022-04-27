import React from 'react';
import styles from './Content.module.css';

function Content() {
    function submitUrl (e) {
        e.preventDefault()
        alert('URL enviada para Servidor Jean')

        document.getElementById("box_short_url").style.display = "flex";
        document.getElementById("box_qrcode").style.display = "flex";


    }
  
  
    function copyButton(e) {
        e.preventDefault()

            let urlCurta = document.getElementById("url_curta");
            urlCurta.select();
            urlCurta.setSelectionRange(0, 99999);
            document.execCommand("copy");
            alert("Link copiado par área de transferência: " + urlCurta.value);          
    }

  
    return (
    <div className={styles.content}>
        <div className={styles.box_content}>

      <form className={styles.form} onSubmit={submitUrl} method="post" id="" action="">
        <input type="url" name="link" placeholder='Digite ou cole o link aqui...' />
        <div className={styles.custom_link}>
            <input type="url" name="link" placeholder='curtin.com/LinkPersonalizado' />
            <button className="buttonStandard" type='submit'>Encurtar</button>
        </div>
      </form>

      <div id='box_short_url' className={styles.box_short_url}>
        <input id="url_curta" type="text" name="link" placeholder='------' />
        <button onClick={copyButton}>Copiar</button>
      </div>


      <div id='box_qrcode' className={styles.box_qrcode}>
        <div className={styles.qrcode_image}>
            
        </div>
            <button onClick={copyButton}>Baixar QRCODE</button>
      </div>

        </div>

    </div>
  );
}

export default Content;
