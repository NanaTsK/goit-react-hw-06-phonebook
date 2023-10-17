import { styled } from 'styled-components';
import { Notify } from 'notiflix';

export const Container = styled.div`
  background-color: rgba(104, 133, 176, 0.8);
  border-radius: 4px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.6);
  color: #fff;
  margin: 20px auto;
  padding: 10px;
  width: 340px;
`;

export const notifyInit = Notify.init({
  width: '280px',
  position: 'center-center',
  distance: '20px',
  opacity: 0.8,
  fontSize: '20px',
  borderRadius: '50px 10px',
  notiflixIconColor: 'rgba(0,0,0,0.6)',
  pauseOnHover: true,
});
