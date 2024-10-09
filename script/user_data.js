const urlParams = new URLSearchParams(window.location.search)
const name = urlParams.get('name')
const result = urlParams.get('result')
document.getElementById('C_userName').innerHTML = name

//fetch content from content.json
// let path = '../dataBase/content.json'
// fetch(path)
//   .then(Response => Response.json())
//   .then(data => {
//     console.log(data)
//     renderContent(data)
//   })

//   .catch(error => alert('Error:', error))

//
const data = [
  {
      "id": "c-1",
      "label": "Mark as Complete",
      "checked": false,
      "videoUrl": "https://www.youtube.com/embed/UFD4SP91tSM?si=C7hBGT1vE-gKSaBI"
  },
  {
      "id": "c-2",
      "label": "Mark as Complete",
      "checked": false,
      "videoUrl": "https://www.youtube.com/embed/EsRyyJmO-u8?si=31vxa-BDYNvOdfUs"
  },
  {
      "id": "c-3",
      "label": "Mark as Complete",
      "checked": false,
      "videoUrl": "https://www.youtube.com/embed/UFD4SP91tSM?si=C7hBGT1vE-gKSaBI"
  },
  {
      "id": "c-4",
      "label": "Mark as Complete",
      "checked": false,
      "videoUrl": "https://www.youtube.com/embed/EsRyyJmO-u8?si=31vxa-BDYNvOdfUs"
  }
]

renderContent(data)


function renderContent (content) {
  const contentList = document.getElementById('content-list')

  content.forEach(item => {
    // Create list item element
    const li = document.createElement('li')

    // Create div for checkbox and label
    const div = document.createElement('div')
    div.classList.add('ctr')

    // Create checkbox input
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.id = item.id
    checkbox.checked = item.checked

    // Create label
    const label = document.createElement('i')
    label.textContent = item.label
    label.htmlFor = item.id

    // Append checkbox and label to div
    div.appendChild(checkbox)
    div.appendChild(label)

    // Create iframe for video
    const iframe = document.createElement('iframe')
    iframe.width = '360'
    iframe.height = '210'
    iframe.src = item.videoUrl
    iframe.title = 'YouTube video player'
    iframe.setAttribute('frameborder', '0')
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    )
    iframe.setAttribute('allowfullscreen', '')

    // Append div and iframe to list item
    li.appendChild(div)
    li.appendChild(iframe)

    // Append list item to ul
    contentList.appendChild(li)
  })
}
document.addEventListener('DOMContentLoaded', renderContent)

document.getElementById('ass').addEventListener('click', e => {
  const Name = encodeURIComponent(name)
  window.location.href = `assignment.html?name=${Name}`
})

if (result === 'Pass') { // Check if result is a string and equals 'pass'
    const cerButton = document.getElementById('cer');
    cerButton.style.cursor = 'pointer';
  
    cerButton.addEventListener('click', e => {
      const Name = encodeURIComponent(name); // Properly encode the name
      window.location.href = `certificate.html?name=${Name}`; // Use the encoded name
    });
  } else {
    const cerButton = document.getElementById('cer');
    cerButton.style.cursor = 'not-allowed'; // Set the cursor to 'not-allowed' when the result is not pass
  }
  