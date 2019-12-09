import PropTypes from 'prop-types';

const MessageShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
});

export default MessageShape;