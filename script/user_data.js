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
        "question": "NEP-2020 है ?",
        "options": ["New National Education Policy-2020", "यह नीति पहले 1986 ई० में आई।", "इनका लक्ष्य 2030 तक GER (Gross Enrollment Ratio) 100% तक लाना है।","इनमें सभी।"],
        "answer": "3"
      },
      {
        "question": "इनमें कौन सही है ?",
        "options": ["Foundation Stage 4 साल का होता है।", "Preparatory Stage 5 साल का होता है।", "NEP-2020 को 9 जुलाई 2020 को लागू किया गया।", "इनमें से कोई नहीं।"],
        "answer": "3"
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
    "Q" : [
      {
        "question": "निपुण मिशन पूर्ण करने का लक्ष्य है।",
        "options": ["जुलाई 2029-जनवरी 2030", "मई 2025-अप्रैल 2027", " मार्च 2026-अप्रैल 2027", "इनमें से कोई नहीं।"],
        "answer": "2"
      }
    ]
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
    "Q" : [
      {
        "question": "पढ़ने की तैयारी बच्चों को किस अवधारणा की ओर ले जाती है?",
        "options": ["अज्ञात से ज्ञात की ओर", "ज्ञात से अज्ञात की ओर", "दोनों", "इनमें से कोई नहीं"],
        "answer": "1"
      }
    ]
  },
  // 8
  {
    "R" : {
      "R1" : "510.png"
    }
  },
  // 9
  {
    "Q" : [
      {
        "question": "लेखन तत्परता में आवश्यक है ?",
        "options": ["सूक्ष्म मोटर कौशल का विकास", "हाथ-आँख समन्वय में सुधार", "बायें से दायें गति का अभ्यास", "उपरोक्त सभी"],
        "answer": "3"
      },
      {
        "question": "बच्चे को लेखन तत्परता के अन्तर्गत किन चीजों का आदी होना पड़ता है?",
        "options": [
          "बिना किसी समस्या के पेंसिल पकड़ना",
          "पृष्ठ के भीतर दो लाइनों के मध्य लिखने का प्रयास करना",
          "a और b दोनों",
          "इनमें से कोई नहीं"
        ],
        "answer": "2"
      }
    ]
  },
  // 10
  {
    "R" : {
      "R1" : "610.png"
    }
  },
  // 11
  {
    "Q" : [
      {
        "question": "पूर्व संख्या अवधारणा में क्या शामिल है?",
        "options": [
          "कैचाई व लम्बाई",
          "आकार व वजन",
          "मात्रा, दूरी व समय",
          "इनमें सभी"
        ],
        "answer": "3"
      },
      {
        "question": "संख्या तत्परता की अवधारणाओं को क्रम में सजाएँ:<br><br>a) गिनती<br>b.) संख्या पहचान और अनुक्रम<br>c.) पूर्व-संख्या अवधारणाएँ",
        "options": [
          "a, b, c",
          "b, c, a",
          "c, b, a",
          "b, a, c"
        ],
        "answer": "2"
      }
     
    ]
  },
  // 12
  {
    "R" : {
      "R1" : "710.png"
    },
    "V" : {
      "V1" : "PG10.mp4"
    }
  },
  // 13
  {
    "Q" : [
      {
        "question": "क्या बच्चों (3-6 वर्ष) में SEL (Socio Emotional Learning) आवश्यक है?",
        "options": [
          "हाँ",
          "नहीं",
          "कभी-कभी",
          "पता नहीं"
        ],
        "answer": "0"
      },
      {
        "question": "बच्चों के सामाजिक भावनात्मक विकास में कौन-कौन सी चीजें सहायक हैं?",
        "options": [
          "आत्मजागरूकता और आत्म प्रबंधन",
          "सामाजिक जागरुकता और संबंध कौशल",
          "जिम्मेदार निर्णय लेना",
          "उपर्युक्त सभी"
        ],
        "answer": "3"
      }
      
    ]
  },
  // 14
  {
    "R" : {
      "R1" : "810.png"
    }
  },
  // 15
  {
    "Q" : [
      {
        "question": "स्कूल रेडीनेस के उद्देश्य नहीं हैं:",
        "options": [
          "कक्षा-1 में नामांकित होने वाले बच्चों को शुरुआती चार महीने के लिए स्कूल रेडीनेस के लिए तैयार करना",
          "बच्चों के समग्र विकास पर ध्यान केन्द्रित करना",
          "बच्चों का संप्रेषण प्रभावी होना और भाषा एवं नींव तैयार करना",
          "इनमें सभी"
        ],
        "answer": "0"
      }
      
    ]
  },
  // 16
  {
    "R" : {
      "R1" : "910.png"
    },
    "V" : {
      "V1" : "PG13.mp4",
      "V2" : "PG13a.mp4",
      "V3" : "PG13b.mp4",
      "V4" : "PG13c.mp4",
    }
  },
  // 17
  {
    "Q" : [
      {
        "question": "वर्ष 6 के बच्चे का सर्वांगीण विकास कब समझा जाएगा?",
        "options": [
          "शारीरिक स्वास्थ्य एवं गत्यात्मक विकास",
          "वैयक्तिक, सामाजिक, भावनात्मक, संवेदी एवं ग्रहणशीलता का विकास",
          "रचनात्मक एवं सौंदर्य-बोध का विकास",
          "इनमें सभी का विकास होगा"
        ],
        "answer": "3"
      }
      
    ] 
  },
  // 18
  {
    "R" : {
      "R1" : "1010.png"
    }
  },
  // 19
  {
    "Q" : [
      {
        "question": "विद्यालय तत्परता के सूचक व्यवस्थित क्रम में सजाएँ:<br><br>a) माता-पिता का सहयोग<br>b) नियमों का पालन<br>c) अन्य छात्रों में एन्गेजमेंट<br>d) मित्रतापूर्ण व्यवहार<br>e) भाषा कौशल<br>f) सामाजिक अंतः क्रिया<br>",
        "options": [
          "b, c, d, e, f, a",
          "c, d, e, f, a, b",
          "d, e, f, a, b, c",
          "a, b, c, d, e, f"
        ],
        "answer": "3"
      }
      
    ]
  },
  // 20
  {
    "R" : {
      "R1" : "1110.png"
    },
    "V" : {
      "V1" : "PG15.mp4"
    }
  },
  // 21
  {
    "R" : {
      "R1" : "1210.png",
      "R2" : "1310.png",
      "R3" : "1311.png",
      "R4" : "1312.png",
      "R5" : "1313.png",
      "R6" : "1314.png",
      "R7" : "1315.png",
      "R8" : "1316.png",
    },
    "V" : {
      "V1" : "PG16.mp4",
      "V2" : "PG16a.mp4"
    }
  },
  // 22
  {
    "Q" : [
      {
        "question": "FLN मिशन का उद्देश्य क्या है?",
        "options": [
          "2026-27 तक कक्षा-3 के अंत में बच्चे पढ़ने-लिखने में दक्ष हो जाएं",
          "सुबोपलि (सुनना-बोलना-पढ़ना-लिखना) पूर्ण हो",
          "बच्चों के माता-पिता, अभिभावकों की सहभागिता हो",
          "इनमें सभी"
        ],
        "answer": "3"
      },
      {
        "question": "बुनियादी साक्षरता और भाषा विकास के अंग कौन-कौन से हैं?",
        "options": [
          "मौखिक भाषा का विकास",
          "लिपि संरचना की निपुणता",
          "विविध प्रकार की लिखित सामग्री से परिचय",
          "उपर्युक्त सभी"
        ],
        "answer": "3"
      }
            
    ]
  },
  // 23
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
    },
    "V" : {
      "V1" : "PG19.mp4"
    }
  },
  // 24
  {
    "Q" : [
      {
        "question": "गणित की अवधारणा सीखने के क्रम क्या हैं?",
        "options": [
          "LPS",
          "PSEL",
          "ELPS",
          "इनमें से कोई नहीं"
        ],
        "answer": "2"
      },
      {
        "question": "कौन सही है?",
        "options": [
          "a) ELPS approach Pamela Liebeck द्वारा 1984 में दी गई",
          "b) बुनियादी संख्या ज्ञान के कौशल: संख्या पूर्व अवधारणा, स्थानिक समझ, मापन, आँकड़ों का प्रबंधन, पैटर्न आदि",
          "a और b दोनों",
          "इनमें से कोई नहीं"
        ],
        "answer": "2"
      }
      

      
    ]
  },
  // 25
  {
    "R" : {
       "R1":"1419.png",
       "R2":"14110.png"
    }
  },
  // 26
  {
    "Q" : [
      {
        "question": "दो संख्याओं को जोड़ने में अपनी रणनीति का प्रयोग करना और इसे दैनिक जीवन में लागू करना साधारण समस्याओं के समाधान के लिए क्या सत्य है?",
        "options": [
          "सत्य",
          "असत्य",
          "सयेद",
          "पता नहीं"
        ],
        "answer": "0"
      },
      {
        "question": "बुनियादी संख्या ज्ञान के लक्ष्यों की प्राप्ति में बच्चों को किससे अपेक्षा होती है?",
        "options": [
          "माता-पिता से",
          "शिक्षक से",
          "दोनों से",
          "इनमें से कोई नहीं"
        ],
        "answer": "2"
      }
      
      
    ]
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
    "Q" : [
      {
        "question": "रचनात्मक कौशल के अंतर्गत क्या आता है?",
        "options": [
          "कहानी लेखन व कविता लेखन",
          "चित्रकला व हस्तकला",
          "संगीत व नाटक",
          "उपरोक्त सभी"
        ],
        "answer": "3"
      }
      
    ]
  },
  // 29
  {
    "R" : {
      "R1" : "1610.png",
      "R2" : "1611.png"
    },
    "V" : {
      "V1" : "PG24.mp4",
      "V2" : "PG24a.mp4",
      "V3" : "PG24b.mp4"
    }
  },
  // 30
  {
    "Q" : [
      {
        "question": "खेल-कूद और शारीरिक गतिविधियाँ क्यों आवश्यक हैं?\nक्योंकि इससे: ",
        "options": [
          "दिमाग तरोताजा और शांत होता है",
          "संयम, दृढ़ता और गंभीरता बढ़ती है",
          "आत्मविश्वास एवं सहयोग की भावना बढ़ती है",
          "इनमें सभी"
        ],
        "answer": "3"
      }
      
      
    ]
  },
  // 31
  {
    "R" : {
      "R1" : "1710.png",
      "R2" : "1711.png"
    },
    "V" : {
      "V1" : "PG25.mp4"
    }
  },
  // 32
  {
    "Q" : [
      {
        "question": "निम्न में से कौन असत्य है?",
        "options": [
          "स्वास्थ्य और स्वच्छता से मानसिक विकास एवं सामाजिक कल्याण संभव है।",
          "विश्व में (5 वर्ष से कम उम्र के बच्चे) लगभग 1/4 बच्चे संबंधित रोगों से ग्रसित हैं।",
          "सजगता के लिए समय से उठना-सोना, स्वच्छ भोजन, और डस्टबिन का प्रयोग आवश्यक है।",
          "इनमें से कोई नहीं।"
        ],
        "answer": "3"
      }
      
    ]
  },
  // 33
  {
    "R" : {
      "R1" : "1810.png",
      "R2" : "1811.png"
    },
    "V" : {
      "V1" : "PG23.mp4"
    }
  },
  // 34
  {
    "Q" : [
      {
        "question": "पर्यावरणीय जागरूकता बनाए रखने के लिए अभिभावकों को क्या करना चाहिए?",
        "options": [
          "पार्कों का भ्रमण, पौधा रोपण एवं पत्तों की पहचान कराना",
          "प्रकृति के बारे में जानकारी देना",
          "पर्यावरणीय समस्या समाधान में बच्चों को शामिल करना",
          "उपरोक्त सभी"
        ],
        "answer": "3"
      }
      
    ]
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

dataCollector(moduleId,ModuleData);

function dataCollector(moduleId,ModuleData){
  const subModData = ModuleData[moduleId];
  const finalData = subModData['R'];
  if(finalData){
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
  
  const finalDataV = subModData["V"];
  if(finalDataV){
    Object.values(finalDataV).forEach((e) => {
      const li = document.createElement('li');
      const div = document.createElement('div');
      const video = document.createElement('video');
      const path = `moduleDB/M${moduleId}/${e}`;
      console.log(path);
      video.width = 320;
      video.controls = true;
      video.src = path;
      li.appendChild(div);
      li.appendChild(video);
      contentList.appendChild(li);
    });
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

