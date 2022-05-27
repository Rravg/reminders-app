import PropTypes from 'prop-types';

function Reminder(props) {
    const handleChange = () => {
        props.setIsComplete(!props.isComplete, props.id);
    };
    return (
        <li className="list-group-item d-flex justify-content-between" >
            <input
                className='form-check-input'
                type="checkbox"
                checked={props.isComplete}
                onChange={handleChange}
            />
            <h6>
                {props.reminderText}
            </h6>
            <span className="badge bg-info rounded-pill">{props.dueDate}</span>
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