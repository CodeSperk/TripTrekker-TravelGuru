import PropTypes from 'prop-types';
const Button = ({text}) => {
  return (
    <button className="py-2 px-4 md:px-6 bg-[var(--clr-accent)] text-[var(--clr-heading)] font-medium rounded-md border-2 border-transparent hover:bg-[var(--clr-white)] hover:border-[var(--clr-accent)]">
      {text}
    </button>
  );
};

Button.propTypes={
  text:PropTypes.string
}
export default Button;