export const taskList = (taskLists, action) => {
    switch(action.type){
        case 'createList' : {
            const taskList = {
                id : action.payload.id,
                title : action.payload.title,
                task : [],
                boardID : action.payload.boardID
            }
            return [...taskLists, taskList]
        }
        case 'updateList' : {
            return taskLists.map((item) => {
                if (item.id === action.payload.id){
                    item.title = action.payload.title || item.title
                }
                return item
            })
        }
        case 'deleteList' : {
            return taskLists.filter(item => item.id !== action.payload.id)
        }
        case 'addTaskIdtoList' : {
            return taskLists.map((list) => {
                if(list.id === action.payload.id){
                    list.task.push(action.payload.taskID)
                }
                return list
            })
        }
        case 'removeTaskIdtoList' : {
            return taskLists.map((item) => {
                if(item.id === action.payload.id){
                    item.task = item.task.filter(task => task !== action.payload.taskID)
                }
                return item
            })
        }
        case 'changeBoardIdofList' : {
            return taskLists.map((item) => {
                if (item.id === action.payload.id){
                    item.boardID = action.payload.boardID
                }
                return item
            })
        }
        case 'sortTaskIdinList' : {
            // const copyList = [...taskLists]
            const {targetIndex, sourceIndex, droppableId} = action.payload;
            const targetList = taskLists.find(taskList => taskList.id === droppableId )
            const task = targetList.task.splice(sourceIndex,1)
            targetList.task.splice(targetIndex, 0, ...task);

            return[...taskLists]
        }
        default : {
            return taskLists
        }
    }
}