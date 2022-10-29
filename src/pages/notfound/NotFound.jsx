import pagenotfoundilustration from "../../assets/images/404ilustration.svg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none", paddingTop: "5rem" }}>
        Back to Homepage
      </Link>
      <h1
        style={{
          width: "fit-content",
          margin: "2rem auto",
          fontSize: "clamp(1.6rem, 3vw, 3rem)",
          color: "#3e3e3e",
          textAlign: "center",
        }}
      >
        Error404: Page not found...
      </h1>
      <img
        style={{ display: "block", width: "50%", margin: "0 auto" }}
        src={pagenotfoundilustration}
        alt="Page not found"
      />
    </>
  );
}
