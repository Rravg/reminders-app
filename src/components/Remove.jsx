function Remove(props) {

    const handleClick = (e) => {
        const uncompleteReminders = props.reminders.filter((reminder) => {
            return !reminder.isComplete;
        })
        props.setReminders(uncompleteReminders);
    }

    return (
        <button onClick={handleClick}
            type='button'
            className="btn btn-warning"
        >
            Remove Completed
        </button>
    );
}

export default Remove;