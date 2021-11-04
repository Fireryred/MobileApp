// const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

// export const validEmail = (value) =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//     ? 'Please enter a valid email'
//     : undefined;

export const isRequired = (value) =>
  !value || value === '' ? 'This field is required' : undefined;

// export const isValidMobile = (value) => {
//   if (value) {
//     const errorMessage = 'Please enter a valid mobile number';
//     try {
//       const number = phoneUtil.parse(value);

//       if (!phoneUtil.isValidNumber(number)) {
//         return errorMessage;
//       }
//     } catch (e) {
//       return errorMessage;
//     }
//   }
// };

export const maxLength = (length) => (value) =>
  value.length > length ? `Maximum length is ${length}` : undefined;

export const minLength = (length) => (value) =>
  value.length < length ? `Minimum length is ${length}` : undefined;

export const verifyPassword = (value, allValues) => {
  let ret;

  if (value !== allValues.toJS().password) {
    ret = 'The password confirmation does not match';
  }

  return ret;
};
