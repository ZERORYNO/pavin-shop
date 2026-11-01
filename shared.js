const db={
  get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},
  set:(k,v)=>{localStorage.setItem(k,JSON.stringify(v));window.dispatchEvent(new StorageEvent('storage',{key:k}));}
};

const K={p:'apx_products',c:'apx_cats'};

// กำหนดหมวดหมู่พื้นฐานของร้าน
const CATS0={helmet:'ໝວກກັນນັອກ',brake:'ລະບົບເບຣກ',shock:'ໂຊກອັບ',body:'ຄາບອນ & ຊຸດສີ',tire:'ຢาง & ລໍ້',acc:'ອຸປະກອນຕົກແຕ່ງ'};
const CATS=()=>db.get(K.c,CATS0);

// ตั้งค่าเริ่มต้นเป็นอาเรย์ว่าง (จะไม่แสดงสินค้าใดๆ จนกว่าแอดมินจะกดเพิ่มเข้ามาเอง)
const P0=[];

const CAR={
  anousith:'Anousith Express (ອານຸສິດ)',
  hal:'HAL Logistics (ຮຸ່ງອາລຸນ)',
  mixay:'Mixay Express (ມີໄຊ)'
};

const G=[
  {id:'vte',n:'ນະຄອນຫຼວງວຽງຈັນ',d:[{id:'cth',n:'ຈັນທະບູລີ'},{id:'skt',n:'ສີໂຄດຕະບອງ'},{id:'xst',n:'ໄຊເສດຖາ'}]},
  {id:'lpb',n:'ຫຼວງພະບາງ',d:[{id:'lpb',n:'ຫຼວງພະບາງ'},{id:'nan',n:'ນານ'},{id:'chp',n:'ຈອມເພັດ'}]},
  {id:'chs',n:'ຈຳປາສັກ',d:[{id:'pks',n:'ປາກເຊ'},{id:'pkg',n:'ປາກຊ່ອງ'},{id:'ptg',n:'ໂພນທອງ'}]}
];

const SB=i=>`ສາຂາ ${i} (ຕົວຢ່າງ)`;
const WA='+856 20 54 084 343', HOT='20 58 734 556';