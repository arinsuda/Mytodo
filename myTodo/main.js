import {
    // addTodoHandler,
    beforeUnloadHandler,
    loadHandler
  } from './eventHandle/eventController'
  
window.addEventListener('load', () => {
    loadHandler()
  })

window.addEventListener("beforeunload", (event) => {
  beforeUnloadHandler(event);
});
//เป็นเหตุการณ์ (event) ที่เกิดขึ้นเมื่อหน้าต่างหรือแท็บของเว็บไซต์กำลังพยายามจะปิดหรือรีเฟชรหน้าเว็บไซต์หรือสลับแท็ปอื่น
//เมื่อมีการเก็บค่าของข้อมูล หมายถึง เมื่อค่าของข้อมูลไม่ใช่ค่า default จะมี popUp เด้งขึ้นมาเพื่อให้แน่ใจว่าคุณต้องการที่จะปิดหรือ รีเฟชร ใช่ไหม
