import { config } from "@/config";
import { useAppDispatch } from "@/store/hooks";
import { addTables } from "@/store/slices/tablesSlice";
import { getSelectedLocationId } from "@/utils/client";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const NewTable = ({ open, setOpen }: Props) => {
  const selectedLocationId = getSelectedLocationId();
  const dispatch = useAppDispatch();
  const [newTable, setNewTable] = useState({
    name: "",
    locationId: selectedLocationId,
  });

  console.log("this is new table", newTable);

  const createNewTable = async () => {
    const isValid = newTable.name;
    if (!isValid) return alert("Please enter table name");
    const response = await fetch(`${config.apiBaseUrl}/tables`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTable),
    });
    console.log("hellooo");
    console.log(response);
    // const tableCreated = await response.json();
    const tableCreated = await response.json();

    dispatch(addTables(tableCreated));
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Create new table</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: 300,
        }}>
        <TextField
          label="Name"
          variant="outlined"
          sx={{ mt: 1 }}
          onChange={(evt) =>
            setNewTable({
              ...newTable,
              name: evt.target.value,
            })
          }
        />
        <Button
          variant="contained"
          onClick={createNewTable}
          sx={{ width: "fit-content", alignSelf: "flex-end", mt: 2 }}>
          Create
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default NewTable;
