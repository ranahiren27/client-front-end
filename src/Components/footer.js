import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <div class="first">
          <h4>About</h4>
          <a href="/">siteInspire</a> is a showcase of the finest web and
          interactive design.
        </div>
        <div class="latest">
          <h4>Latest Websites</h4>
          <ul>
            <li>
              <a href="/websites/9385-harrods">Harrods</a>
            </li>
            <li>
              <a href="/websites/9384-buck">Buck</a>
            </li>
            <li>
              <a href="/websites/9287-mdff-athens">MDFF Athens</a>
            </li>
          </ul>
        </div>
        <div class="links">
          <h4>Information</h4>
          <ul>
            <li>
              <a href="http://eepurl.com/dUwy9" target="_blank">
                Mailing List
              </a>
            </li>
            <li>
              <a href="/advertise">Advertise</a>
            </li>
            <li>
              <a href="/privacy">Privacy</a>
            </li>
          </ul>
        </div>
        <div class="social">
          <h4>Connect with Us</h4>
          <ul>
            <li>
              <a
                class="twitter"
                href="https://twitter.com/siteinspire"
                target="_blank"
              >
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                class="facebook"
                href="https://facebook.com/siteinspire"
                target="_blank"
              >
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                class="tumblr"
                href="http://siteinspire.tumblr.com/"
                target="_blank"
              >
                <span>Tumblr</span>
              </a>
            </li>
            <li>
              <a
                class="rss"
                href="https://feeds2.feedburner.com/Siteinspire"
                target="_blank"
              >
                <span>RSS</span>
              </a>
            </li>
            <li>
              <a
                class="email"
                href="mailto:mail@siteinspire.com"
                target="_blank"
              >
                <span>Email</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          Copyright © 2020{" "}
          <a href="http://howellsstudio.com" target="_blank">
            Howells—Studio
          </a>{" "}
          All screenshots © of their respective owners.
        </div>
      </section>
    );
  }
}

export default Footer;