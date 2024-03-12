import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from "carbon-components-react";
import React from "react";

const TableComponent = () => {
  const rows = [
    {
      id: "1",
      name: "Rushabh Patel",
      role: "Ceo",
      time: "74 Hrs",
      salary: "4,000,00",
    },
    {
      id: "2",
      name: "Jay",
      role: "Project Manager",
      time: "80 Hrs",
      salary: "35000",
    },
    {
      id: "3",
      name: "Rutvik",
      role: "Consulatnt",
      time: "50 Hrs",
      salary: "25000",
    },
    {
      id: "4",
      name: "Deepan",
      role: "Frontend Developer",
      time: "100 Hrs",
      salary: "60000",
    },
    {
      id: "5",
      name: "kartik",
      role: "Developer",
      time: "120 Hrs",
      salary: "80000",
    },
    {
      id: "6",
      name: "Neha",
      role: "Finance",
      time: "30 Hrs",
      salary: "20000",
    },
    {
      id: "7",
      name: "Pooja",
      role: "Python Developer",
      time: "70 Hrs",
      salary: "30000",
    },
  ];
  const headers = ["FullName", "Designation", "Hours Worked", "Company"];
  return (
    <div style={{ marginLeft: "16rem", marginTop: "3rem" }}>
      <TableContainer title="Team">
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader>{header}</TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell key={`${row.id}-${row.key}`}>{row.name}</TableCell>
                <TableCell key={`${row.id}-${row.key}`}>{row.role}</TableCell>
                <TableCell key={`${row.id}-${row.key}`}>{row.time}</TableCell>
                <TableCell key={`${row.id}-${row.key}`}>{row.salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
