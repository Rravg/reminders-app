function Remove(props) {

    const handleClick = (e) => {
        const uncompleteReminders = props.reminders.filter((reminder) => {
            return !reminder.isComplete;
        })
        props.setReminders(uncompleteReminders);
    }

    return (
        <button onClick={handleClick}>
            Remove Completed
        </button>
    );
}

export default Remove;