import React from 'react';

// to do : refactor with an object

function Greetings(props) {
  console.log(props.lang);
  if (props.lang === 'de') return <p>Hallo {props.children}</p>;
  else if (props.lang === 'fr') return <p>Bonjour {props.children}</p>;
  else if (props.lang === 'en') return <p>Hello {props.children}</p>;
  else if (props.lang === 'es') return <p>Hola {props.children}</p>;
}

export default Greetings;
