export const TaskReducer = (tasks,action) =>{
    switch (action.type){
        case 'createTask' : {
            const task = {
                id : action.payload.id,
                title :action.payload.title,
                boardID : action.payload.boardID,
                taskID : action.payload.taskID
            }
            return [...tasks, task]
        }
        case 'updateTask' : {
            return tasks.map((item) => {
                if(item.id === action.payload.id){
                    item.title = action.payload.title
                }
                return item
            })
        }
        case 'deleteTask' : {
            return tasks.filter((item) => item.id !== action.payload.id)
        }
        case 'changeBoardIdOfTask' : {
            return tasks.map((item) => {
                if(item.id === action.payload.id){
                    item.boardID = action.payload.boardID
                }
                return item
            })
        }
        case 'changeListIdOfTask' : {
            return tasks.map( (item) => {
                if (item.id === action.payload.id) {
                    item.taskID = action.payload.taskID
                }
                return item
            })
        }
        default : {
            return tasks
        }
    }
}