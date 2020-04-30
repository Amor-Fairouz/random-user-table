import React  ,{ useEffect, useState }from 'react';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
      minWidth: 700,
  },
});
const Users = ({ users, loading }) => {
  
  // const [users, setUsers] = useState([]);
  const classes = useStyles();
  
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
    {users ?  
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table mb-8">
                <TableHead>
                    <TableRow>
                        <StyledTableCell > User Avatar</StyledTableCell>
                        <StyledTableCell>Gender</StyledTableCell>
                        <StyledTableCell >First Name</StyledTableCell>
                        <StyledTableCell >Last Name</StyledTableCell>
                        <StyledTableCell >Email</StyledTableCell>
                        <StyledTableCell >Phone</StyledTableCell>
                        <StyledTableCell >Birthday</StyledTableCell>
                        <StyledTableCell >Adress</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell >< img src ={row.picture ? row.picture.large : "Avatar"} style={{width: 50, borderRadius: '50%'}} /></TableCell>
                            <TableCell component="th" scope="row">{row.gender}</TableCell>
                            <TableCell >{row.name ? row.name.first : "First Name"}</TableCell>
                            <TableCell >{row.name ? row.name.last : "Last Name"}</TableCell>
                            <TableCell >{row.email}</TableCell>
                            <TableCell >{row.phone}</TableCell>
                            <TableCell >{row.dob ? row.dob.date : "jj/mm/yyyy"}</TableCell>
                            <TableCell >{row.location ? row.location.country : "Tunisia"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        : null}


</div>
  );
};

export default Users;