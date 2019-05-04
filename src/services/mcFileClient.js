import axios from 'axios';

const BASE_URL = 'https://desenv.mcfile.com/mcfile/';

const COMMANDS = {
  LOGIN_SESSION: 'LOGIN_SESSAO',
  GENERATE_NEW_PASSWORD: 'GERARNOVASENHA',
  CLIENT_RESEARCH: 'PESQUISA_CLIENT'
};

const SERVICE_TYPE = {
  CONTROL_SERVICE: 'CtrlServicos',
  CONTROL_SECURE: 'CtrlSeguracao'
};

export const makeLogin = (userName, password) => {
  const url = `${BASE_URL}${SERVICE_TYPE.CONTROL_SERVICE}?cmd=${
    COMMANDS.LOGIN_SESSION
  }&conta=${userName}&senha=${password}&avatar=true`;
  console.log('URL', url);
  return axios.get(url);
};

export const makeForgotPassword = email => {
  const url = `${BASE_URL}${SERVICE_TYPE.CONTROL_SECURE}`;
  const payload = {
    CMD: COMMANDS.GENERATE_NEW_PASSWORD,
    email: email
  };
  return axios.post(url, payload);
};

export const getSearchDocumentListing = (searchString, idSessao) => {
  const url = `${BASE_URL}${SERVICE_TYPE.CONTROL_SERVICE}?cmd=${
    COMMANDS.CLIENT_RESEARCH
  }&idSessao=${idSessao}&palavras=${searchString}`;
  console.log('URL', url);
  return axios.get(url);
};
