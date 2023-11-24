import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Input,
} from "@mui/material";

function Popup({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>File Upload</DialogTitle>
      <DialogContent>
        <Input type="file" />
        <br />
        <br />
        <Button variant="contained" color="primary">
          Upload
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default Popup;
