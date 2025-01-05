const KAKAO_URL = 'https://kauth.kakao.com';
const CLIENT_ID = import.meta.env.VITE_KAKAO_REST_KEY;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URL;

const KAKAO_AUTH_URL = `${KAKAO_URL}/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const AuthAPI = {
  KAKAO_AUTH_URL: KAKAO_AUTH_URL
};

export default AuthAPI;
