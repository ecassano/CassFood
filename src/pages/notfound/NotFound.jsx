import notfoundimg from "../../assets/images/undraw_page_not_found_re_e9o6.svg";

export default function NotFound() {
  return (
    <>
      <h1
        style={{
          width: "fit-content",
          margin: "2rem auto",
          fontSize: "clamp(1.6rem, 3vw, 3rem)",
          color: "#3e3e3e",
        }}
      >
        Error404: Page not found...
      </h1>
      <img
        style={{ display: "block", width: "60%", margin: "0 auto" }}
        src={notfoundimg}
        alt="Page not found"
      />
    </>
  );
}
