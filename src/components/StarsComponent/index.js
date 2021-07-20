import styled from 'styled-components/native';
import React from 'react';
import {View, Text} from 'react-native';
import StarEmpty from '../../assets/star_empty.svg';
import Star from '../../assets/star.svg';
import StarHalf from '../../assets/star_half.svg';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const StarView = styled.View``;

export const TextNumber = styled.Text`
  font-size: 16px;
  color: #737373;
`;

const StarsComponent = ({stars, showNumber}) => {
  let s = [0, 0, 0, 0, 0];
  let floor = Math.floor(stars);
  let left = stars - floor;

  for (var i = 0; i < floor; i++) {
    s[i] = 2;
  }
  if (left > 0) {
    s[i] = 1;
  }

  return (
    <Container>
      {s.map((i, k) => (
        <StarView key={k}>
          {i === 0 && <StarEmpty width="25" height="25" fill="grey" />}
          {i === 2 && <Star width="25" height="25" fill="orange" />}
          {i === 1 && <StarHalf width="25" height="25" fill="orange" />}
        </StarView>
      ))}
      {showNumber && <TextNumber>{stars}</TextNumber>}
    </Container>
  );
};

export default StarsComponent;
