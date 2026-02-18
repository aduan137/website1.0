(() => {

  // Grab each monitor container
  const m1 = document.querySelector('#m1')
  const m2 = document.querySelector('#m2')
  const m3 = document.querySelector('#m3')

  // Grab buttons by position inside each monitor
 const m1b1 = m1.querySelector('.choices button:nth-of-type(1)')
const m1b2 = m1.querySelector('.choices button:nth-of-type(2)')
const m1b3 = m1.querySelector('.choices button:nth-of-type(3)')

const m2b1 = m2.querySelector('.choices button:nth-of-type(1)')
const m2b2 = m2.querySelector('.choices button:nth-of-type(2)')
const m2b3 = m2.querySelector('.choices button:nth-of-type(3)')

const m3b1 = m3.querySelector('.choices button:nth-of-type(1)')
const m3b2 = m3.querySelector('.choices button:nth-of-type(2)')
const m3b3 = m3.querySelector('.choices button:nth-of-type(3)')


  // Locks (no arrays)
  let lock120 = false
  let lock240 = false
  let lock480 = false
  let b1=false
  let b2=false
  let b3=false

  // ---- Monitor 1 ----
  m1b1.addEventListener('click', () => {
    if(!b1){
      
    if (!lock120) {
      b1=true;
      lock120 = true
    m1b1.style.backgroundColor = 'black'
      m1b1.style.color = 'white'
      check()
    }}
  })

  m1b2.addEventListener('click', () => {
    if(!b1){
       
    if (!lock240) {
    
    b1=true;
        lock240 = true
    m1b2.style.backgroundColor = 'black'
    m1b2.style.color = 'white'
    check()
    }}
  })

  m1b3.addEventListener('click', () => {
    if(!b1){ 
    if (!lock480) {b1=true;
      lock480 = true
      m1b3.style.backgroundColor = 'black'
      m1b3.style.color = 'white'
      check()
    }}
  })

  m2b1.addEventListener('click', () => {
    if(!b2){ 
    if (!lock120) {b2=true;
      lock120 = true
      m2b1.style.backgroundColor = 'black'
      m2b1.style.color = 'white'
      check()
    }}
  })

  m2b2.addEventListener('click', () => {
    if(!b2){
    if (!lock240) {b2=true;
      lock240 = true
      m2b2.style.backgroundColor = 'black'
      m2b2.style.color = 'white'
      check()
    }}
  })

  m2b3.addEventListener('click', () => {
    if(!b2){
    if (!lock480) {b2=true;
      lock480 = true
      m2b3.style.backgroundColor = 'black'
      m2b3.style.color = 'white'
      check()
    }}
  })

  // ---- Monitor 3 ----
  m3b1.addEventListener('click', () => {
      if(!b3){
    if (!lock120) {b3=true;
      lock120 = true
      m3b1.style.backgroundColor = 'black'
      m3b1.style.color = 'white'
      check()
    }}
  })

  m3b2.addEventListener('click', () => {
    if(!b3){
    if (!lock240) {b3=true;
      lock240 = true
      m3b2.style.backgroundColor = 'black'
      m3b2.style.color = 'white'
      check()
    }}
  })

  m3b3.addEventListener('click', () => {
    if(!b3){
    if (!lock480) {b3=true;
      lock480 = true
      m3b3.style.backgroundColor = 'black'
      m3b3.style.color = 'white'
      check()
    }}
  })

    function check() {
  if (lock120 && lock240 && lock480) {
    const answers = document.querySelectorAll('.answer')
    answers.forEach(p => {
      p.style.display = 'block'
    })
  }
}




})()
