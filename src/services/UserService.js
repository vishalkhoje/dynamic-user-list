import userList from "../mockdata/userList.json";
/**
 * Fetch User list
 */
const fetchUserList = new Promise((reslove, reject) => {
    const delay = 2000; //added for demo purpose, need to be removed
    setTimeout(()=> {
        reslove(() => {
            return userList
        })
        reject((error) => {
            return error;
        })
    }, delay)
})

export {
    fetchUserList
}