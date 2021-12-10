import React from 'react';
import StarEmpty from '../../assets/star_empty.svg';
import Star from '../../assets/star.svg';
import StarHalf from '../../assets/star_half.svg';
import {Container, StarView, TextNumber} from './styles';

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
