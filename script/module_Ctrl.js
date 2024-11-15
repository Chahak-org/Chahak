import { ModuleData } from './user_data.js'

const urlParams = new URLSearchParams(window.location.search)
const Name = urlParams.get('name')
const moduleId = Number(urlParams.get('moduleId'))

{
  const ci0 = document.getElementById('ci0')
  ci0.addEventListener('click', () => {
    openContent(Name, 'user.html', 0, 'R')
  })

  const ci1 = document.getElementById('ci1')
  ci1.addEventListener('click', () => {
    openContent(Name, 'user.html', 1, 'R')
  })

  const ci2 = document.getElementById('ci2')
  ci2.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 2, 'Q')
  })

  const ci3 = document.getElementById('ci3')
  ci3.addEventListener('click', () => {
    openContent(Name, 'user.html', 3, 'R')
  })

  const ci4 = document.getElementById('ci4')
  ci4.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 4, 'Q')
  })

  const ci5 = document.getElementById('ci5')
  ci5.addEventListener('click', () => {
    openContent(Name, 'user.html', 5, 'R')
  })

  const ci6 = document.getElementById('ci6')
  ci6.addEventListener('click', () => {
    openContent(Name, 'user.html', 6, 'R')
  })

  const ci7 = document.getElementById('ci7')
  ci7.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 7, 'Q')
  })

  const ci8 = document.getElementById('ci8')
  ci8.addEventListener('click', () => {
    openContent(Name, 'user.html', 8, 'R')
  })

  const ci9 = document.getElementById('ci9')
  ci9.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 9, 'Q')
  })

  const ci10 = document.getElementById('ci10')
  ci10.addEventListener('click', () => {
    openContent(Name, 'user.html', 10, 'R')
  })

  const ci11 = document.getElementById('ci11')
  ci11.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 11, 'Q')
  })

  const ci12 = document.getElementById('ci12')
  ci12.addEventListener('click', () => {
    openContent(Name, 'user.html', 12, 'R')
  })

  const ci13 = document.getElementById('ci13')
  ci13.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 13, 'Q')
  })

  const ci14 = document.getElementById('ci14')
  ci14.addEventListener('click', () => {
    openContent(Name, 'user.html', 14, 'R')
  })

  const ci15 = document.getElementById('ci15')
  ci15.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 15, 'Q')
  })

  const ci16 = document.getElementById('ci16')
  ci16.addEventListener('click', () => {
    openContent(Name, 'user.html', 16, 'R')
  })

  const ci17 = document.getElementById('ci17')
  ci17.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 17, 'Q')
  })

  const ci18 = document.getElementById('ci18')
  ci18.addEventListener('click', () => {
    openContent(Name, 'user.html', 18, 'R')
  })

  const ci19 = document.getElementById('ci19')
  ci19.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 19, 'Q')
  })

  const ci20 = document.getElementById('ci20')
  ci20.addEventListener('click', () => {
    openContent(Name, 'user.html', 20, 'R')
  })

  const ci21 = document.getElementById('ci21')
  ci21.addEventListener('click', () => {
    openContent(Name, 'user.html', 21, 'R')
  })

  const ci22 = document.getElementById('ci22')
  ci22.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 22, 'Q')
  })

  const ci23 = document.getElementById('ci23')
  ci23.addEventListener('click', () => {
    openContent(Name, 'user.html', 23, 'R')
  })

  const ci24 = document.getElementById('ci24')
  ci24.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 24, 'Q')
  })

  const ci25 = document.getElementById('ci25')
  ci25.addEventListener('click', () => {
    openContent(Name, 'user.html', 25, 'R')
  })

  const ci26 = document.getElementById('ci26')
  ci26.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 26, 'Q')
  })

  const ci27 = document.getElementById('ci27')
  ci27.addEventListener('click', () => {
    openContent(Name, 'user.html', 27, 'R')
  })

  const ci28 = document.getElementById('ci28')
  ci28.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 28, 'Q')
  })

  const ci29 = document.getElementById('ci29')
  ci29.addEventListener('click', () => {
    openContent(Name, 'user.html', 29, 'R')
  })

  const ci30 = document.getElementById('ci30')
  ci30.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 30, 'Q')
  })

  const ci31 = document.getElementById('ci31')
  ci31.addEventListener('click', () => {
    openContent(Name, 'user.html', 31, 'R')
  })

  const ci32 = document.getElementById('ci32')
  ci32.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 32, 'Q')
  })

  const ci33 = document.getElementById('ci33')
  ci33.addEventListener('click', () => {
    openContent(Name, 'user.html', 33, 'R')
  })

  const ci34 = document.getElementById('ci34')
  ci34.addEventListener('click', () => {
    openContent(Name, 'assignment.html', 34, 'Q')
  })

  const ci35 = document.getElementById('ci35')
  ci35.addEventListener('click', () => {
    openContent(Name, 'user.html', 35, 'R')
  })
}

const storedUserData = JSON.parse(localStorage.getItem('userData'))
storedUserData.completedModules.forEach(element => {
  // document.getElementById(`ci${element}`).style.background = 'green';
  document.getElementById(`ci${element}`).style.background =
    'linear-gradient(to right, rgb(50, 129, 67), rgb(25, 95, 74))'
  document.getElementById(`ci${element}`).querySelector('h3').style.color = 'white';
  document.getElementById(`ci${element}`).querySelector('p').style.color ='#121632';
})

const modulePrev = document.getElementById('modulePrev')
modulePrev.addEventListener('click', () => {
  let cmid = moduleId - 1
  let dt = Object.keys(ModuleData[cmid])

  if (dt.includes('R')) {
    openContent(Name, 'user.html', cmid, 'R')
  } else {
    openContent(Name, 'assignment.html', cmid, 'Q')
  }
})

const moduleNext = document.getElementById('moduleNext')

const delay = 180000 // 3 minutes in milliseconds
let startTime = Date.now()
let flag = false
// Enable the button after 3 minutes
setTimeout(() => {
  flag = true
}, delay)

const cm = Object.values(storedUserData.completedModules);
console.log(cm);
let statusMod = cm.includes(moduleId);
console.log(statusMod);

// Add click event listener to the button
moduleNext.addEventListener('click', () => {
  if (!statusMod && !flag) {
    const timeElapsed = Date.now() - startTime;
    const timeLeft = Math.ceil((delay - timeElapsed) / 1000) // सेकंड में बदलें

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    const minModuleTime = 3 // न्यूनतम समय (मिनट में) जो उपयोगकर्ता को मॉड्यूल में बिताना चाहिए

    alert(`कृपया मॉड्यूल के सभी लिखित पाठ और वीडियो को पूरा करें।
अभी ${minutes} मिनट : ${seconds} सेकंड बचे हैं।
----------------------------------------------------
⚠ एक मॉड्यूल का न्यूनतम समय: ${minModuleTime} मिनट।`)
  }else {
    if(moduleId<35){
      let cmid = moduleId + 1 // Next module ID
      let dt = Object.keys(ModuleData[cmid])
      if (dt.includes('R')) {
        openContent(Name, 'user.html', cmid, 'R')
      } else if(dt.includes('Q')) {
        openContent(Name, 'assignment.html', cmid, 'Q')
      }
    }
    // Update the current module as completed
    completeModule(moduleId)

  }
})
  

function completeModule (moduleId) {
  const storedUserData = JSON.parse(localStorage.getItem('userData'))

  if (storedUserData) {
    if (!storedUserData.completedModules) {
      storedUserData.completedModules = []
    }

    if (!storedUserData.completedModules.includes(moduleId)) {
      storedUserData.completedModules.push(moduleId)
      localStorage.setItem('userData', JSON.stringify(storedUserData))
      alert(`मॉड्यूल ${moduleId} पूरा हो गया।`)
    }
  } else {
    console.warn('User data not found. Please log in.')
  }
}

function openContent (name, page, moduleId, type) {
  let urlname = encodeURIComponent(name)
  let urlpage = encodeURIComponent(page)
  let urlmoduleId = encodeURIComponent(moduleId)
  let urltype = encodeURIComponent(type)
  const url = `${urlpage}?name=${urlname}&moduleId=${urlmoduleId}&type=${urltype}"`;
  window.location.href = url;
}