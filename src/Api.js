const base_api = 'https://api.b7web.com.br/devbarber/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  checkToken: async (token) => {
    const req = await fetch(`${base_api}/auth/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token}),
    });
    const json = await req.json();
    return json;
  },
  signIn: async (email, password) => {
    const req = await fetch(`${base_api}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });
    const json = await req.json();
    console.log('Login', json);
    return json;
  },
  signUp: async (name, email, password) => {
    const req = await fetch(`${base_api}/user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password}),
    });
    const json = await req.json();
    return json;
  },
  Logout: async () => {
    const token = await AsyncStorage.getItem('token');

    const req = await fetch(`${base_api}/auth/logout`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token}),
    });
    const json = await req.json();
    return json;
  },
  getBarbers: async (lat = null, lng = null, adress = null) => {
    let token = await AsyncStorage.getItem('token');
    const req = await fetch(
      `${base_api}/barbers?token=${token}&lat=${lat}&lng=${lng}&adress`,
    );
    const json = await req.json();
    return json;
  },
  getBarber: async (id) => {
    let token = await AsyncStorage.getItem('token');
    const req = await fetch(`${base_api}/barber/${id}?token=${token}`);
    const json = await req.json();
    console.log('chamou aq res', json);
    return json;
  },
  setFavorite: async (barberId) => {
    const token = await AsyncStorage.getItem('token');

    const req = await fetch(`${base_api}/user/favorite`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token, barber: barberId}),
    });
    const json = await req.json();
    console.log(json);
    return json;
  },
  setAppointment: async (
    userId,
    service,
    selectdeYear,
    selectedMonth,
    selectedDay,
    selectedHour,
  ) => {
    const token = await AsyncStorage.getItem('token');

    const req = await fetch(`${base_api}/barber/${userId}/appointment`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        service: service,
        year: selectdeYear,
        month: selectedMonth,
        day: selectedDay,
        hour: selectedHour,
      }),
    });
    const json = await req.json();
    return json;
  },
  search: async (barberName) => {
    console.log('entrou na req');
    const token = await AsyncStorage.getItem('token');
    console.log('token', token);
    const req = await fetch(
      `${base_api}/search?q=${barberName}&token=${token}`,
    );
    console.log('chamou aq res', req);
    const json = await req.json();
    return json;
  },
  getFavorites: async () => {
    const token = await AsyncStorage.getItem('token');
    const req = await fetch(`${base_api}/user/favorites?token=${token}`);
    const json = await req.json();
    return json;
  },
  getAppointments: async () => {
    const token = await AsyncStorage.getItem('token');
    const req = await fetch(`${base_api}/user/appointments?token=${token}`);
    const json = await req.json();
    return json;
  },
  updateUser: async (body) => {
    const token = await AsyncStorage.getItem('token');
    body.token = token;

    const req = await fetch(`${base_api}/user`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const json = await req.json();
    console.log('boooode', json)
    return json;
  },
};
