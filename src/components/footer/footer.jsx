import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "../../assets/images/logocass.png";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer1">
            <div className="footer-info">
              <h5>CassFood</h5>
              <ul>
                <li>Institucional website</li>
                <li>Contact us</li>
                <li>Carreers</li>
                <li>CassFood Canada</li>
              </ul>
            </div>
            <div className="footer-info">
              <h5>Discover</h5>
              <ul>
                <li>Register your business</li>
                <li>CassFood Shop</li>
                <li>CassFood Card</li>
                <li>CassFood Companies Blog</li>
              </ul>
            </div>
            <div className="footer-info-redes">
              <h5>Social Media</h5>
              <ul>
                <li>
                  <InstagramIcon
                    sx={[
                      {
                        color: "#717171",
                        fontSize: "clamp(1.6rem, 2.5vw, 3rem)",
                        cursor: "pointer",
                      },
                      { "&:hover": { color: "#9EB23B" } },
                    ]}
                  />
                </li>
                <li>
                  <TwitterIcon
                    sx={[
                      {
                        color: "#717171",
                        fontSize: "clamp(1.6rem, 2.5vw, 3rem)",
                        cursor: "pointer",
                      },
                      { "&:hover": { color: "#9EB23B" } },
                    ]}
                  />
                </li>
                <li>
                  <YouTubeIcon
                    sx={[
                      {
                        color: "#717171",
                        fontSize: "clamp(1.6rem, 2.5vw, 3rem)",
                        cursor: "pointer",
                      },
                      { "&:hover": { color: "#9EB23B" } },
                    ]}
                  />
                </li>
                <li>
                  <FacebookIcon
                    sx={[
                      {
                        color: "#717171",
                        fontSize: "clamp(1.6rem, 2.5vw, 3rem)",
                        cursor: "pointer",
                      },
                      { "&:hover": { color: "#9EB23B" } },
                    ]}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="footer2">
            <div className="footer2-rights">
              <img src={logo} alt="Logo" />
              <p>
                &copy; Copyright 2022 - CassFood - All rights reserved CassFood
                with Online Restaurant Agency.
              </p>
            </div>
            <div className="footer2-links">
              <ul>
                <li>Terms and conditions</li>
                <li>Privacy</li>
                <li>Safety tips</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
