import PropTypes from 'prop-types';

function Reminder(props) {
    const handleChange = () => {
        props.setIsComplete(!props.isComplete, props.id);
    };
    return (
        <li className='item'>
            {props.reminderText} |{" "}
            <span className='due-date'>due date: {props.dueDate} |{" "}</span>
            <span className='is-complete'>Completed?:
                <input type="checkbox"
                    checked={props.isComplete}
                    onChange={handleChange}
                />
            </span>
        </li>
    );
}

Reminder.propTypes = {
    reminderText: PropTypes.string,
    dueDate: PropTypes.string,
    isComplete: PropTypes.bool
}

const date = new Date();
const formattedDate = date.toISOString().substring(0, 10);

Reminder.defaultProps = {
    reminderText: "No reminder Set",
    dueDate: formattedDate,
    isComplete: false
}

export default Reminder;