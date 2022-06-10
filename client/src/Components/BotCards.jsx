import React, { useState, useEffect } from 'react';

const BotCards = (props)  => {
  const [state, setState] = useState({ title: '', links: ''});
  
  useEffect(() => {
    const { steps } = props;
    const { title, link } = steps;
    setState({ title, link });
  }, [props])

  const { title, link } = state;
    return (
      <div className="card w-96 bg-neutral shadow-2xl">
      <div className="card-body">
        <h2  className="card-title">{title.value}</h2>
        <p>{link.value}</p>
      </div>
      </div>
    );
}

BotCards.propTypes = {
  steps: PropTypes.object,
};

BotCards.defaultProps = {
  steps: undefined,
};

export default BotCards;