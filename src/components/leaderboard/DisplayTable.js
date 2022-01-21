import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const DisplayTable = props => {
  const data = props?.golfers?.golfer?.golfer?.data;
  const golferName = props?.golfers?.golfer?.golferName?.data;

  if (data) {
    data.sort((e, i) => {
      if (e.score === i.score) {
        return i.thru - e.thru;
      }
      return e.score - i.score;
    });
  }

  const Table = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;

    td,
    th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }
  `;

  const displayPlayers = () => {
    

    if (data) {
      return data.map((e, i, arr) => {
        return (
          <tr key={i} onClick={() => console.log(e.player_id)}>
            <td>
              {displayGolferName(e.player_id)}
            </td>
            <td>{e.score}</td>
            <td>{e.thru}</td>
            <td>{e.total}</td>
          </tr>
        );
      });
    }
  };

  const displayGolferName = id => {
    if (!golferName) return;
    return golferName.map((e, index) => {
      return e.id === id ? `${e.first_name} ${e.last_name}` : null;
    });
  };

  return (
    <Table>
      <tr>
        <th>Name</th>
        <th>Score</th>
        <th>Thru</th>
        <th>Total</th>
      </tr>
      {displayPlayers()}
    </Table>
  );
};

const mapStateToProps = state => {
  return {
    golfers: state,
  };
};

export default connect(mapStateToProps, {})(DisplayTable);
