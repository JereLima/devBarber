import React from 'react';
import {
  Container,
  ImageBarber,
  NameBarber,
  ViewNameService,
  ViewPriceService,
  NameService,
  PriceService,
  ViewDate,
  ViewHour,
  TextDate,
  ViewAlignBarber,
  ViewAlignService,
  ViewAlignDate,
} from './styles';
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
