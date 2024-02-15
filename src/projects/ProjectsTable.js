import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { projects_tr, projects_en } from './projectsList';
import i18n from "../i18n";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#38659A",
    color: theme.palette.common.white,
    textAlign: "left",
    '@media (max-width: 768px)': {
      paddingTop: 10,
      paddingBottom: 10,
    }
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
    textAlign: "left",
    paddingLeft: 20,
    '@media (max-width: 768px)': {
      fontSize: 9,
      paddingLeft: 5,
      paddingTop: 15,
      paddingBottom: 15,
    }
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  fontSize: 10,
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const ProjectsTable =()=>
{

  const [data, setData] = React.useState([]);
  const { t } = useTranslation();

  useEffect (()=>{

    const rows = []
    if (i18n.language === "tr")
    {
      projects_tr.forEach((project)=>{
        rows.push({type: project[0], name: project[1], location: project[2]})
      })
    }
    else
    {
      projects_en.forEach((project)=>{
        rows.push({type: project[0], name: project[1], location: project[2]})
      })
    }
    setData(rows)
  }
  ,[i18n.language])

  return (
    <TableContainer component={Paper} style={{marginLeft: 20}} >
      <Table sx={{ minWidth: 300}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{t('tableHeader1')}</StyledTableCell>
            <StyledTableCell align="right">{t('tableHeader2')}</StyledTableCell>
            <StyledTableCell align="right">{t('tableHeader3')}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.type}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProjectsTable;