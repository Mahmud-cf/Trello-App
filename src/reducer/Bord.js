export const bordReducer = ( Boards, action ) => {
    switch (action.type) {
        case 'CreateBoard' : {
            
            const board = {
                id : Date.now(),
                title : action.payload.title,
                taskList : [],
                task : [],
                createdAt : new Date().toLocaleDateString()
            }
            return [...Boards, board]
        }
        case 'UpdateBoard' : {
            const tobeUpdatedBoard = Boards.find((item) => item.id === action.payload.id);
            return Boards.map((item) => {
                if(item.id === tobeUpdatedBoard.id){
                    item.title = action.payload.title
                }
                return item
            })
        }
        case 'DeleteBoard' : {
            return Boards.filter(item => item.id !== action.payload.id)
        }
        case 'AddListIdtoBoard' : {
            return Boards.map((item) => {
                if(item.id === action.payload.id){
                    item.taskList.push(action.payload.taskListID)
                }
                return item
            })
        }
        case 'RemoveListIdFromBoard' : {
            return Boards.map((item) => {
                if(item.id === action.payload.id){
                   item.taskList = item.taskList.filter(item => item.id !== action.payload.taskListID)
                }
                return item
            })
        }
        case 'AddTaskIdFromBoard' : {
            return Boards.map((item) => {
                if(item.id === action.payload.id){
                    item.task.push(action.payload.taskID)
                }
                return item
            })
        }
        case 'RemoveTaskIdFromBoard' : {
            return Boards.map((item) => {
                if(item.id === action.payload.id){
                   item.task = item.task.filter(item => item.id !== action.payload.taskID)
                }
                return item
            })
        }
        default : {
            return Boards
        }
    }
}