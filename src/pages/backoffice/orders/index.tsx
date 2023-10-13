import Layout from "@/components/layout";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";
import { updateOrderlineStatus } from "@/store/slices/orderlinesSlice";
import {
  getNumberOfMenusByOrderId,
  getSelectedLocationId,
} from "@/utils/client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, SelectChangeEvent } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Menus as Menu,
  Orders as Order,
  OrderStatus,
  Orderlines as Orderline,
} from "@prisma/client";
import { useState } from "react";

interface Props {
  menus: Menu[];
  order: Order;
  orderlines: Orderline[];
}

const Row = ({ order, orderlines, menus }: Props) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleUpdateOrderStatus = async (
    itemId: string,
    evt: SelectChangeEvent<"PENDING" | "PREPARING" | "COMPLETE" | "REJECTED">
  ) => {
    dispatch(
      updateOrderlineStatus({
        itemId,
        status: evt.target.value as OrderStatus,
      })
    );
  };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right">{order.id}</TableCell>
        <TableCell align="right">
          {getNumberOfMenusByOrderId(orderlines, order.id)}
        </TableCell>
        <TableCell align="right">{order.tableId}</TableCell>
        <TableCell align="right">{order.isPaid ? "Yes" : "No"}</TableCell>
        <TableCell align="right">{order.price}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit sx={{ my: 2 }}>
            {/* Your content here */}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const Orders = () => {
  const { isLoading, orders, orderlines, menus } = useAppSelector(appData);
  const selectedLocationId = getSelectedLocationId() as string;
  const currentLocationOrders = orders.filter(
    (item) => item.locationId === Number(selectedLocationId)
  );

  const getOrderlinesByOrderId = (orderId: number) => {
    return orderlines.filter((item) => item.orderId === orderId);
  };

  return (
    <Layout>
      <Box>
        <TableContainer component={Paper} sx={{ maxHeight: "100%" }}>
          <Table aria-label="collapsible table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="right">Order Id</TableCell>
                <TableCell align="right">No. of menus</TableCell>
                <TableCell align="right">Table Id</TableCell>
                <TableCell align="right">Paid</TableCell>
                <TableCell align="right">Total price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentLocationOrders.map((order) => (
                <Row
                  key={order.id}
                  menus={menus}
                  order={order}
                  orderlines={getOrderlinesByOrderId(order.id)}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Orders;
