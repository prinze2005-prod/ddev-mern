import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TechHeader from "../../components/TechHeader";

const CompletedTask = () => {
  return (
    <main>
      <TechHeader title="Completed Tasks" />
      <Wrapper className="page-100">
        <section>
          <table>
            <tr>
              <th>Job-ID</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Contact</th>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>19</td>
              <td>Male</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>19</td>
              <td>Female</td>
              <td>Female</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>25</td>
              <td>Male</td>
              <td>Male</td>
            </tr>
          </table>
          <br />
          <Link to="/Tech" className="btn">
            back to Tech page
          </Link>
        </section>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  background: var(--clr-grey-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 5rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  .btn {
    background: var(--clr-primary-5);
  }

  tr:hover {
    background-color: var(--clr-primary-5);
    width: 100%;
  }

  table {
    width: 800px;
    height: 200px;
    background: var(--clr-white);
    padding: 10px;
    border-radius: 15px;
  }

  th {
    border-bottom: 1px solid black;
  }

  td {
    text-align: center;
  }
  .App {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TaskTitle = styled.div`
  background: var(--clr-primary-5);
  display: flex;
  justify-content: center;
  text-align: center;
`;

export default CompletedTask;
