import React, {useEffect} from 'react';
import StackedTextInput from '../StackedTextInput';
import PropTypes from 'prop-types';
import {scorePassword} from 'utils/utilityFunctions';

const RenderTextField = ({
  input,
  label,
  required,
  placeholder,
  meta: {error, visited, touched},
  meta,
  normalizeInput = (value) => value,
  ...custom
}) => {
  let opts = {};
  if (error !== undefined && visited && touched) {
    opts.helperText = error;
    opts.error = true;
  }

  const [value, setValue] = React.useState(input.value);
  const [score, setScore] = React.useState(0);

  useEffect(() => {
    setValue(input.value);
  }, [input.value]);

  return (
    <StackedTextInput
      placeholder={placeholder}
      label={label}
      {...opts}
      required={required}
      onChangeText={(params) => {
        let nValue = normalizeInput(params);

        if (custom.password) {
          setScore(scorePassword(nValue));
        }

        input.onChange(nValue);
        setValue(nValue);
      }}
      value={value}
      score={score}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      {...custom}
    />
  );
};

RenderTextField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  meta: PropTypes.object,
};

export default RenderTextField;
