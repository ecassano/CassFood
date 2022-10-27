import { Link } from "react-router-dom";
import "./carousel.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import Restaurant from "../../pages/restaurant/Restaurant";
// import dataRestaurants from "../../assets/data/grests.json";

export default function SlideSingle({ data, index, number, margin }) {
  return (
    <div className="slide-single">
      {data.map((rest, i) => {
        let route = rest.name.toLowerCase();
        route = route.replace(/[^a-zA-Z0-9]/g, "");
        if (i >= index * number && i < (index + 1) * number) {
          return (
            <Link
              to={`/cassfood${route}`}
              key={i}
              style={{
                color: "#9EB23B",
                textDecoration: "none",
                width: `calc(100% / ${number})`,
                margin: `0 ${margin}rem`,
              }}
              sx={[{ "&:hover": { borderColor: "black" } }]}
              onClick={<Restaurant data={rest} />}
            >
              <span>
                <div
                  className="avatar"
                  style={{ backgroundImage: `url(${rest.logo})` }}
                ></div>
                <div className="description">
                  <h4>{rest.name}</h4>
                  <p>{rest.category}</p>
                </div>
                <VerifiedIcon
                  sx={{ position: "absolute", top: "8%", right: "3%" }}
                  fontSize="x-small"
                />
              </span>
            </Link>
          );
        }
      })}
    </div>
  );
}
