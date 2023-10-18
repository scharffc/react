import React from "react";
import { Table } from "react-bootstrap";
import { Container} from "react-bootstrap";

class BootstrapTable extends React.Component {
  render() {
    return (
      <div>
            <h3>Table</h3>
            <Container>
            <Table striped bordered hover responsive="md">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Shirt</td>
                  <td>2</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>T-shirt</td>
                  <td>1</td>
                  <td>$30</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Pant</td>
                  <td>1</td>
                  <td>$80</td>
                </tr>
                <tr>
                  <td colSpan="3">Total Price</td>
                  <td>$600</td>
                </tr>
              </tbody>
            </Table>
            </Container>
      </div>
    );
  }
}

export default BootstrapTable;
