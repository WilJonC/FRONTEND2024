import ListItem from './ListItem';

const list = ({ taskList }) => {
    return (
        <>

            <div className="row">

                <div className="col-6">
                    <h4>TASK</h4>
                </div>

                <div className="col-2">
                    <h4>LIMIT</h4>
                </div>

                <div className="col">
                    <h4>LOCATIONS</h4>
                </div>

            </div>
            {
                taskList.map((task) =>
                    <ListItem
                        key={task.id}
                        task={task}
                    />
                )
            }
        </>

    )
}


export default list