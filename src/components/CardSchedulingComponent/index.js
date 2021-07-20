import React from 'react';
import styled from 'styled-components/native';

const CardSchedulingComponent = ({data}) => {
  const newdate = data.datetime.split(' ');
  const dateOriginal = newdate[0];
  const hour = newdate[1].substring(0, 5);

  const date = new Date(dateOriginal);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDay();

  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;

  const useDate = `${day}/${month}/${year}`;

  return (
    <Container>
      <ViewAlignBarber>
        <ImageBarber source={{uri: data.barber.avatar}} />
        <NameBarber>{data.barber.name}</NameBarber>
      </ViewAlignBarber>

      <ViewAlignService>
        <ViewNameService>
          <NameService>{data.service.name}</NameService>
        </ViewNameService>

        <ViewPriceService>
          <PriceService>R${data.service.price.toFixed(2)}</PriceService>
        </ViewPriceService>
      </ViewAlignService>

      <ViewAlignDate>
        <ViewDate>
          <TextDate>{useDate}</TextDate>
        </ViewDate>

        <ViewHour>
          <TextDate>{hour}</TextDate>
        </ViewHour>
      </ViewAlignDate>
    </Container>
  );
};
export default CardSchedulingComponent;

export const Container = styled.View`
  background-color: #63c2d1;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 10px 10px 10px;
`;
export const ImageBarber = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 10px;
`;
export const NameBarber = styled.Text`
  margin-top: 15px;
  padding-left: 20px;
  font-size: 30px;
  color: white;
`;
export const ViewNameService = styled.View``;
export const ViewPriceService = styled.View``;
export const NameService = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;
export const PriceService = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;
export const ViewDate = styled.View`
  margin-top: 10px;
  padding: 10px 5px;
  background-color: white;
  border-radius: 10px;
`;
export const ViewHour = styled.View`
  margin-top: 10px;
  padding: 10px 5px;
  background-color: white;
  border-radius: 10px;
`;
export const TextDate = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #63c2d1;
`;
export const ViewAlignBarber = styled.View`
  flex-direction: row;
`;
export const ViewAlignService = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const ViewAlignDate = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
