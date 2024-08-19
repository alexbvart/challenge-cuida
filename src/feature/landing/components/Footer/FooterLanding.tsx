import styles from './FooterLanding.module.css';
import { YoutubeIcon } from "../../../../assets/svg/YoutubeIcon"
import { LogoFooter } from "../../../../assets/svg/LogoFooter"
import Footer from "../../../../components/Footer/Footer"
import { WhatsappIcon } from "../../../../assets/svg/WhatsappIcon"
import { FacebookIcon } from "../../../../assets/svg/FacebookIcon"

export const FooterLanding = () => {
  return (
    <Footer className={styles.footer}>
      
      <Footer.Content className={styles.contentFooter}>
        <LogoFooter />
        <p className={styles.descriptionFooter}>
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.
        </p>
        <section className={styles.socialIcon}>

        <YoutubeIcon />
        <WhatsappIcon />
        <FacebookIcon />
        </section>
      </Footer.Content>
      
      <Footer.Links className={styles.sectionsGrid}>
        <section>
          <header>Product</header>
          <ul className={styles.listLink}>
            <li><a href="#">Download</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Server</a></li>
            <li><a href="#">Countries</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </section>
        <section>
          <header>Engage</header>
          <ul className={styles.listLink}>
            <li><a href="#">LaslesVPN?</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms of service</a></li>
          </ul>
        </section>
        <section>
          <header>Earn money</header>
          <ul className={styles.listLink}>
            <li><a href="#">Become partner</a></li>
            <li><a href="#">Affilite</a></li>
          </ul>
        </section>
      </Footer.Links>
    </Footer>
  )
}