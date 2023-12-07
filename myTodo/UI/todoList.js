function todoUserInterface() {
    function showTodoItem(newId, newDescription) { //กำหนด html element `id=""` ให้แต่ล่ะ list และ newDescription ก็คือ input ที่ user กรอก
        const listTodoDiv = document.getElementById('listTodo') //เข้าถึง id="listTodo"
        console.log(listTodoDiv.children.length);//แสดงจำนวน element node ที่อยู่ใน div id="listTodo"

        //สร้าง div ใหม่
        const newTodoDiv = document.createElement('div')//สร้าง element node : div
        newTodoDiv.className = 'todoiItem' //กำหนดให้ class ของ div ที่สร้าง ชื่อว่า class="todoItem"
        newTodoDiv.setAttribute('id', newId) //กำหนดให้ key : id ของ div มี value : newId 

        //สร้าง p
        const newTodoItem = document.createElement('p') //สร้าง element node : p
        newTodoItem.textContent = newDescription //กำหนดให้ <p> เป็น tage ของข้อมูลที่ user กรอก 
        newTodoDiv.appendChild(newTodoItem) //กำหนดให้ <p> ไปเป็นลูกของ <div>

        //สร้าง ปุ่ม ทำสำเร็จ
        const doneButton = document.createElement('button') //สร้าง element node : button
        doneButton.textContent = 'Not done' //กำหนดให้ tage button เป็นคำว่า Not done --> <button>Not done</button>
        newTodoDiv.appendChild(doneButton) //กำหนดให้ <button> เป็นลูกของ <div>

        //สร้าง ปุ่ม ลบ
        const removeButton = document.createElement('button') //สร้าง element node : button
        removeButton.textContent = 'remove' //กำหนดให้ <button> remove </button>
        newTodoDiv.appendChild(removeButton) //กำหนดให้ <button> เป็นลูกของ <div>

        listTodoDiv.appendChild(newTodoDiv) //จะทำการเพิ่ม <div> ใหม่ที่มี id และคลาสที่ถูกกำหนดมาในฟังก์ชัน showTodoItem ลงไปใน listTodoDiv ที่เป็น element container ที่ใช้แสดงรายการ Todo ทั้งหมดในหน้า HTML.(ให้นึกถึงการที่มีมากกว่า 1 list)
        
    }
        function showNumberOfDone(numberOfDone) {
            const doneP = document.getElementById('done') //เข้าถึง <p id="done">
            doneP.textContent = `Number of Done : ${numberOfDone}` //แสดงจำนวนที่ทำสำเร็จ
        }
        function showNumberOfNotDone(numberOfNotDone) {
            const notDoneP = document.getElementById('notDone') //เข้าถึง <p id="notDone">
            notDoneP.textContent = `Number of Not Done : ${numberOfNotDone}` //แสดงจำนวนที่ทำไม่สำเร็จ
        }
        function removeTodoItem(removeId) {
            const removeTodoNode = document.getElementById(removeId)//เข้าถึง element node ที่มี id = removeId มาเก็บไว้ใน removeTodoNode
            removeTodoNode.parentElement.removeChild(removeTodoNode)//ลบ element node นั้นออกจาก DOM โดยใช้ parent element ของ removeTodoNode ซึ่งคือ element node ที่ถือ removeTodoNode เป็นลูก. คำสั่ง removeChild ทำการลบ child node ที่ถูกต้อง (ในที่นี้คือ removeTodoNode) ออกจาก parent node.
            //ลบ element node นั้นๆ โดยการที่เข้าถึง parent ของ node นั้นๆ เพื่อลบ childe node ที่ถูกเลือกออกไป
        }
        
        return {showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem}
}

export {todoUserInterface}