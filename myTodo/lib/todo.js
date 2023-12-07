class Todo {
    static runningId = 1 //กำหนด id แต่ล่ะ todo

    static setRunningId(loadingId) {
        Todo.runningId = loadingId //เป็นเมทอดสถิตที่ใช้กำหนดค่า runningId ซึ่งคือค่า id ที่จะถูกให้กับ todo ถัดไปที่จะถูกสร้าง.
    }

    //เป็นเมทอด constructor ที่ถูกเรียกเมื่อสร้างอ็อบเจ็กต์ Todo ใหม่. 
    //รับพารามิเตอร์ id, description, และ done โดย id มีค่าเริ่มต้นเป็น null และถ้าเป็น null จะกำหนด id ให้เท่ากับ runningId และ runningId จะถูกเพิ่มขึ้นทีละ 1. 
    //done มีค่าเริ่มต้นเป็น false.
    constructor(id, description, done = false) {
        this.id = id ?? Todo.runningId++
        this.description = description
        this.done = done 
    }

    getTodo() {
        //return {id: this.id, description: this.description, done: this.done}
        return this
    }

    setDescription(newDescription) {
        this.description = newDescription //กำหนดค่าใหม่ให้กับ description
    }

    setDone(value) {
        this.done = value //ใช้กำหนดค่า done ให้กับ Todo
    }

}

export { Todo }