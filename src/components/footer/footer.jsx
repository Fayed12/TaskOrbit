// local
import style from "./footer.module.css"

// ==================================================================================================================
function Footer() {
    const date = new Date()
    let currentYear = date.getFullYear()
    return (
      <>
        <div className={style.footer}>
          <p>
            &copy; {currentYear} <span>Mohamed Fayed</span>. All rights reserved
          </p>
        </div>
      </>
    );
}

export default Footer;