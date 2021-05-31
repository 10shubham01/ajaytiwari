import "./Homepage.css";
import { Grid } from "@material-ui/core";
import Typewriter from "typewriter-effect";
import Music from "./Music";
function Homepage() {
  return (
    <div>
      <div className="banner">
        <Grid xs={12} spacing={2} item container className="Gridbox">
          <Grid
            item
            lg={6}
            sm={12}
            xs={12}
            justify="center"
            alignItems="center"
          ></Grid>
          <Grid
            item
            lg={6}
            sm={12}
            xs={12}
            style={{ backgroundColor: "transparent" }}
          >
            <text
              style={{
                backgroundColor: "transparent",
                color: "white",

                fontSize: window.screen.width < 600 ? "80px" : "100px",
              }}
            >
              {" "}
              <span> Ajay</span> Tiwari
            </text>
            <Music />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Homepage;
