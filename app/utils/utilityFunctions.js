import numeral from 'numeral';
import {Linking, Alert, Platform} from 'react-native';

/* eslint-disable eqeqeq */
export const scorePassword = (pass) => {
  var score = 0;
  if (!pass) {
    return score;
  }

  // award every unique letter until 5 repetitions
  let letters = {};
  for (let i = 0; i < pass.length; i++) {
    letters[pass[i]] = (letters[pass[i]] || 0) + 1;
    score += 5.0 / letters[pass[i]];
  }

  // bonus points for mixing it up
  let variations = {
    digits: /\d/.test(pass),
    lower: /[a-z]/.test(pass),
    upper: /[A-Z]/.test(pass),
    nonWords: /\W/.test(pass),
  };

  let variationCount = 0;
  for (let check in variations) {
    variationCount += variations[check] === true ? 1 : 0;
  }
  score += (variationCount - 1) * 10;

  return parseInt(score, 10);
};

const th = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

const dg = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
];
const tn = [
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
];
const tw = [
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety',
];
export const toWords = (s) => {
  s = s.toString();
  // eslint-disable-next-line no-useless-escape
  s = s.replace(/[\, ]/g, '');
  if (s != parseFloat(s)) {
    return 'Not a Number';
  }
  let x = s.indexOf('.');
  if (x == -1) {
    x = s.length;
  }
  if (x > 15) {
    return 'Too Big';
  }
  let n = s.split('');
  let str = '';
  let sk = 0;
  for (let i = 0; i < x; i++) {
    if ((x - i) % 3 == 2) {
      if (n[i] == '1') {
        str += tn[Number(n[i + 1])] + ' ';
        i++;
        sk = 1;
      } else if (n[i] != 0) {
        str += tw[n[i] - 2] + ' ';
        sk = 1;
      }
    } else if (n[i] != 0) {
      str += dg[n[i]] + ' ';
      if ((x - i) % 3 == 0) {
        str += 'Hundred ';
      }
      sk = 1;
    }
    if ((x - i) % 3 == 1) {
      if (sk) {
        str += th[(x - i - 1) / 3] + ' ';
      }
      sk = 0;
    }
  }
  if (x != s.length) {
    let y = s.length;
    str += 'Point ';
    for (let i = x + 1; i < y; i++) {
      str += dg[n[i]] + ' ';
    }
  }
  return str.replace(/\s+/g, ' ');
};

export const withDecimal = (n) => {
  const nums = n.toString().split('.');
  const whole = toWords(nums[0]);
  if (nums.length == 2) {
    const fraction = toWords(nums[1]);
    return whole + 'and ' + fraction;
  } else {
    return whole;
  }
};

export const convertAmount = (data) => {
  const amountData =
    data && typeof amount === 'string' && data.indexOf(',') >= 0
      ? data.split(',').join('')
      : data;
  return parseFloat(amountData).toFixed(2);
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatNumber = (data) => {
  const ret = numeral(data).format('0,0.00').replace('-', '');
  return convertAmount(data) < 0 ? `(${ret})` : ret;
};

export const contactNumber = (phone, call = true) => {
  let phoneNumber = phone;
  if (call) {
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    } else {
      phoneNumber = `tel:${phone}`;
    }
  } else {
    phoneNumber = `sms:${phone}`;
  }

  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        Alert.alert('Phone number is not available');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((err) => console.log(err));
};
