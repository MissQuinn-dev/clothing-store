import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Error() {
  return (
    <React.Fragment>
      <Box>
        <Grid
          container
          direction="center"
          justifyContent="center"
          alignItems="center"
        >
          <Card sx={{ maxWidth: 600 }}>
            <Box m={2}>
              <Typography
                align="center"
                gutterBottom
                variant="h4"
                component="div"
              >
                Some beautiful paths can't be discovered without getting lost.
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant="h5"
                component="div"
              >
                However you have gone to far!
              </Typography>
              <Box textAlign="center" mt={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button
                    style={{ transform: "translate(10%, -20%)" }}
                    variant="outlined"
                    color="error"
                  >
                    Take me back home!
                  </Button>
                </Link>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
