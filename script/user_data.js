const urlParams = new URLSearchParams(window.location.search)
const name = urlParams.get('name')
const result = urlParams.get('result') 
const moduleId = urlParams.get('moduleId');
const Datatype = urlParams.get('type');

// DATABASE FOR ALL CONTENT --START

// const Vdata = [
  //     {
    //       "id": "c-1",
    //       "label": "Mark as Complete",
    //       "checked": false,
    //       "videoUrl": "https://drive.google.com/file/d/1FVtAN9ub495ZBMcR_P7L2KiO3_rxd1Fr/preview",
    
    //       "thumbnail": "assest/t_n.png"  // Add thumbnail for the first video
    //   },
    //   {
//       "id": "c-2",
//       "label": "Mark as Complete",
//       "checked": false,
//       "videoUrl": "https://drive.google.com/file/d/1BBnYqSQaQSZBieMsOjWFNM8ADgU7hofN/preview",
//       "thumbnail": "assest/t_n.png"  // Add thumbnail for the second video
//   },
// ]



export const ModuleData = [
  // 0
  {
    "R" : {
      "R1": "010.png",
      "R2": "011.png"
    }
  },
  // 1
  {
    "R" : {
      "R1": "110.png",
      "R2": "111.png"
    },
  },
  // 2
  {
    "Q" : [
      {
        "question": "What is the full form of URL?",
        "options": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
        "answer": "Uniform Resource Locator"
      },
   ]
  },
  // 3
  {
    "R" : {
      "R1" : "210.png"
    }
  },
  // 4
  {
    "Q" : []
  },
  // 5
  {
    "R" : {
      "R1" : "310.png"
    }
  },
  // 6
  {
    "R" : {
      "R1" : "410.png"
    }
  },
  // 7
  {
    "Q" : []
  },
  // 8
  {
    "R" : {
      "R1" : "510.png"
    }
  },
  // 9
  {
    "Q" : []
  },
  // 10
  {
    "R" : {
      "R1" : "610.png"
    }
  },
  // 11
  {
    "Q" : []
  },
  // 12
  {
    "R" : {
      "R1" : "710.png"
    }
  },
  // 13
  {
    "Q" : []
  },
  // 14
  {
    "R" : {
      "R1" : "810.png"
    }
  },
  // 15
  {
    "Q" : []
  },
  // 16
  {
    "R" : {
      "R1" : "910.png"
    }
  },
  // 17
  {
    "Q" : [] 
  },
  // 18
  {
    "R" : {
      "R1" : "1010.png"
    }
  },
  // 19
  {
    "Q" : []
  },
  // 20
  {
    "R" : {
      "R1" : "1110.png"
    }
  },
  // 21
  {
    "R" : {
      "R1" : "1210.png"
    }
  },
  // 22
  {
    "Q" : []
  },
  // 23
  {
    "R" : {
      "R1" : "1310.png",
      "R2" : "1311.png",
      "R3" : "1312.png",
      "R4" : "1313.png",
      "R5" : "1314.png",
      "R6" : "1315.png",
      "R7" : "1316.png",
    }
  },
  // 24
  {
    "Q" : []
  },
  // 25
  {
    "R" : {
      "R1" : "1410.png",
      "R2" : "1411.png",
      "R3" : "1412.png",
      "R4" : "1413.png",
      "R5" : "1414.png",
      "R6" : "1415.png",
      "R7" : "1416.png",
      "R8" : "1417.png",
      "R9" : "1418.png",
      "R10" : "1419.png",
      "R11" : "14110.png"
    }
  },
  // 26
  {
    "Q" : []
  },
  // 27
  {
    "R" : {
       "R1" : "1510.png",
      "R2" : "1511.png"
    }
  },
  // 28
  {
    "Q" : []
  },
  // 29
  {
    "R" : {
    "R1" : "1610.png",
      "R2" : "1611.png"
    }
  },
  // 30
  {
    "Q" : []
  },
  // 31
  {
    "R" : {
      "R1" : "1710.png",
      "R2" : "1711.png"
    }
  },
  // 32
  {
    "Q" : []
  },
  // 33
  {
    "R" : {
      "R1" : "1810.png",
      "R2" : "1811.png"
    }
  },
  // 34
  {
    "Q" : []
  },
  // 35
  {
    "R" : {
   "R1" : "1910.png"
    }
  }
];


// DATABASE FOR ALL CONTENT --END
const contentList = document.getElementById('content-list');
const CurrentMID = document.getElementById('mid');

if(moduleId==null){
  const url = `${'user.html'}?moduleId=${0}&type=${'R'}&name=${name}`;
  window.location.href = url;
}

dataCollector(moduleId,Datatype,ModuleData);
function dataCollector(moduleId,Datatype,ModuleData){
  const subModData = ModuleData[moduleId];
  const finalData = subModData[Datatype];
  console.log(finalData);
  if(Datatype==='R'){
    CurrentMID.innerHTML = moduleId;
    Object.values(finalData).forEach((e)=>{
      const li = document.createElement('li');
      const div = document.createElement('div')
      const img = document.createElement('img');
      const path = `moduleDB/M${moduleId}/${e}`;
      console.log(path);
      img.width= 320
      img.src = path;
      li.appendChild(div)
      li.appendChild(img)
      contentList.appendChild(li);
    })
  }
}


// renderContent(data)

// function renderContent(content) {
//   const contentList = document.getElementById('content-list')

//   content.forEach(item => {
//     // Create list item element
//     const li = document.createElement('li')

//     // Create div for checkbox and label
//     const div = document.createElement('div')
//     div.classList.add('ctr')

//     // Create checkbox input
//     const checkbox = document.createElement('input')
//     checkbox.type = 'checkbox'
//     checkbox.id = item.id
//     checkbox.checked = item.checked

//     // Create label
//     const label = document.createElement('i')
//     label.textContent = item.label
//     label.htmlFor = item.id

//     // Append checkbox and label to div
//     div.appendChild(checkbox)
//     div.appendChild(label)

//     // Create video element
//     const video = document.createElement('iframe')
//     video.width = 310
//     video.height = 200
//     video.src = item.videoUrl
//     video.controls = true  // Add controls for play, pause, etc.
//     video.setAttribute('preload', 'metadata')  // Preload only metadata for faster loading
//     video.setAttribute('loading', 'lazy')  // Lazy loading for better performance

//     // Add poster attribute for the video thumbnail
//     video.setAttribute('poster', item.thumbnail)

//     // Append video and div to the list item
//     li.appendChild(div)
//     li.appendChild(video)

//     // Append list item to the content list
//     contentList.appendChild(li)
//   })
// }


// document.addEventListener('DOMContentLoaded', renderContent)

// document.getElementById('ass').addEventListener('click', e => {
//   const Name = encodeURIComponent(name)
//   window.location.href = `assignment.html?name=${Name}`
// })

// if (result === 'Pass') {
//   // Check if result is a string and equals 'pass'
//   const cerButton = document.getElementById('cer')
//   cerButton.style.cursor = 'pointer'

//   cerButton.addEventListener('click', e => {
//     const Name = encodeURIComponent(name) // Properly encode the name
//     window.location.href = `certificate.html?name=${Name}` // Use the encoded name
//   })
// } else {
//   const cerButton = document.getElementById('cer')
//   cerButton.style.cursor = 'not-allowed' // Set the cursor to 'not-allowed' when the result is not pass
// }

// if (result === 'Pass') { // Check if result is a string and equals 'pass'
//     const cerButton = document.getElementById('cer');
//     cerButton.style.cursor = 'pointer';
  
//     cerButton.addEventListener('click', e => {
//       const Name = encodeURIComponent(name); // Properly encode the name
//       window.location.href = `certificate.html?name=${Name}`; // Use the encoded name
//     });
//   } else {
//     const cerButton = document.getElementById('cer');
//     cerButton.style.cursor = 'not-allowed'; // Set the cursor to 'not-allowed' when the result is not pass
//   }
  
