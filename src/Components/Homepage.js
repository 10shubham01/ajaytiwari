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
          >
            <text
              style={{
                backgroundColor: "transparent",
                color: "white",
                fontSize: window.screen.width < 600 ? 30 : 80,
              }}
            >
              {" "}
              <span> Ajay</span> <br></br>Tiwari
            </text>
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
            xs={12}
            style={{ backgroundColor: "transparent" }}
          >
            <Music />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Homepage;
