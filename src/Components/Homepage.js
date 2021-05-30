import "./Homepage.css";
import { Grid } from "@material-ui/core";
import Typewriter from "typewriter-effect";
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
            style={{
              backgroundColor: "transparent",
              color: "white",
              fontSize: window.screen.width < 600 ? 30 : 80,
            }}
          >
            <Typewriter
              style={{}}
              options={{
                strings: [
                  "Hello World !! ",
                  "I am Ajay ",
                  "I am Singer",
                  " I am Composer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xs={12}
            style={{ backgroundColor: "green" }}
          ></Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Homepage;
