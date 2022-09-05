import Api from '../utils/Api';

export const getAllTeams = token => {
  const config = {headers: {Authorization: `Bearer ${token}`}};
  return Api.get('team', config);
};

//LICENSE
export const getUserTeams = (id, token) => {
  const config = {headers: {Authorization: `Bearer ${token}`}};
  return Api.get('team/my/' + id, config);
};

export const getOneTeam = (id, token) => {
  const config = {headers: {Authorization: `Bearer ${token}`}};
  return Api.get('team/' + id, config);
};

export const createTeam = (data, token) => {
  const config = {headers: {Authorization: `Bearer ${token}`}};
  return Api.post('admin/createTeam', data, config);
};

export const editTeam = (data, token) => {
  const config = {headers: {Authorization: `Bearer ${token}`}};
  return Api.patch('admin/updateTeam', data, config);
};

export const deleteTeam = (id, token) => {
  const config = {headers: {Authorization: `Bearer ${token}`}};
  return Api.delete('team/' + id, config);
  //OPPONENT
};

export const createOppTeam = (data, token) => {
  const config = {headers: {Authorization: `Bearer ${token}`}};
  return Api.post('opponentTeam/create', data, config);
};

export const getUserOppTeams = (id, token) => {
  const config = {headers: {Authorization: `Bearer ${token}`}};
  return Api.get('opponentTeam/my/' + id, config);
};

export const getOneOppTeam = (id, token) => {
  const config = {headers: {Authorization: `Bearer ${token}`}};
  return Api.get('opponentTeam/' + id, config);
};

export const deleteOppTeam = (id, token) => {
  const config = {headers: {Authorization: `Bearer ${token}`}};
  return Api.delete('opponentTeam/' + id, config);
};
