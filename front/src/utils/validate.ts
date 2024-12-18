export type UserInfo = {
  email: string;
  password: string;
};

const validateUser = (values: UserInfo) => {
  const errors = {
    email: '',
    password: '',
  };

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
    errors.email = '올바른 이메일 형식이 아닙니다';
  }

  if (!(values.password.length >= 8 && values.password.length <= 20)) {
    errors.password = '비밀번호는 8~20자 사이로 입력해주세요';
  }

  return errors;
};

export const validateLogin = (values: UserInfo) => {
  return validateUser(values);
};

export const validateSignup = (
  values: UserInfo & {passwordConfirm: string},
) => {
  const errors = validateUser(values);
  const signupErrors = {...errors, passwordConfirm: ''};

  if (values.password !== values.passwordConfirm) {
    signupErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
  }

  return signupErrors;
};

export const validateAddPost = (values: {title: string}) => {
  const errors = {
    title: '',
    description: '',
  };

  if (values.title.trim() === '') {
    errors.title = '제목은 1~30자 이내로 입력하세요';
  }

  return errors;
};
