import { Todo } from './todo.js'

function todoManagement() {
    let todos = []   //สร้าง todos array ว่างขึ้นมาเพื่อรองรับการเก็บ todo ทั้งหมด
    function addTodo(id, description, done){
        todos.push(new Todo(id, description, done)) //ใช้เพิ่ม todo เข้าไปใน todos array. 
        //ฟังก์ชันนี้รับพารามิเตอร์ id, description, และ done และทำการสร้าง todo ใหม่โดยใช้ new Todo(id, description, done) แล้ว push เข้าไปใน todos array. 
        return todos[todos.length - 1].id
        //สุดท้ายคืนค่า id ของ todo ล่าสุดที่ถูกเพิ่มเข้าไป
        //สมมุติ ใน todos มี length ของ array เป็น 2 ก็คือ 1,2 แต่การคืนค่า id นับจาก index 0,1 เพื่อจะคืนค่า id ตัวนั้นๆ จำเป็นต้อง length - 1 เพื่อได้ค่า index ที่ถูกต้อง 
    }
    function clearTodo() {
        todos = [] 
    }//เป็นฟังชันที่ใช้ล้างข้อมูลใน todos ให้กลายเป็น array ว่างเหมือนเดิม
    function removeTodo(removeId) {
        todos = todos.filter((todo) => todo.id !== removeId)
    }//กรอง todo ทั้งหมดที่มี id ไม่เท่ากับ removeId เมื่อ removeTodo ถูกใช้งาน จะเหลือ todo ที่ไม่ id ไม่เท่ากับ removeId
    function findTodo(searchId) {
        return todos.find((todo) => todo.id === searchId)
    }//คืนค่า todo จาก todos โดยใช้ id ที่ระบุใน searchId โดยที่ find จะค้นหา todo ที่มี id ตรงกับ searchId ใน array todos ถ้าเจอจะคืนค่า todo แต่ถ้าไม่จะเป็น unifinde
    function getTodos() {
        return todos
    }//คืนค่า array ทั้งหมดของ todos
    function getNumberOfDone() {
        return todos.filter((todo) => todo.done === true).length
    }// ฟังก์ชันนี้คืนจำนวน todos ที่มีสถานะ done เป็น true.
    function getNumberOfNotDone() {
        return todos.filter((todo) => todo.done === false).length
    }// ฟังก์ชันนี้คืนจำนวน todos ที่มีสถานะ done เป็น false.
    function setItemToDone(doneId) {
        const doneItem = todos.find((todo) => todo.id === Number(doneId))
        if(doneItem !== undefined) doneItem.setDone(true)
    }//ฟังก์ชันนี้ตั้งค่าสถานะ done เป็น true สำหรับ todo ที่มี id ตรงกับ doneId.
    function loadTodos(userTodos){
        Todo.setRunningId(userTodos[userTodos.length - 1].id)

        userTodos.forEach((todo) => {
            addTodo(todo.id, todo.description, todo.done)
        });
    }//ฟังก์ชันนี้ใช้เพื่อโหลด todos จากข้อมูลที่ได้รับมาจากผู้ใช้ และเพิ่ม todos ลงใน array ที่เก็บ todos ทั้งหมด.
//ในกรณีของ loadTodos, ฟังก์ชันนี้ทำการตั้งค่าค่าเริ่มต้นของ runningId ใหม่สำหรับคลาส Todo โดยให้มีค่าเท่ากับ id ของ todo ที่มี id มากที่สุดใน userTodos. 
//จากนั้น, ฟังก์ชันทำการเรียกใช้ addTodo สำหรับทุก todo ใน userTodos เพื่อเพิ่ม todos เข้าไปใน array ที่เก็บ todos ทั้งหมด.
return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    setItemToDone,
    loadTodos,
    clearTodo
}
}

export { todoManagement }