import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="button-more"
        variant="outlined"
        sx={[
          {
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            textTransform: "capitalize",
            border: "none",
            fontWeight: "bold",
            margin: "3rem 0 0 1rem",
          },
          {
            "&:hover": {
              border: "none",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        ]}
        onClick={handleClickOpen}
      >
        More <ArrowForwardIosIcon fontSize="extra-small" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"New Feature"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Feature still beeing developed. Sorry for the inconvenient...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Leave</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
