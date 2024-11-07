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

const data = [
    {
      "id": "c-1",
      "label": "Mark as Complete",
      "checked": false,
      "videoUrl": "https://drive.google.com/file/d/1FVtAN9ub495ZBMcR_P7L2KiO3_rxd1Fr/preview",

      "thumbnail": "assest/t_n.png"  // Add thumbnail for the first video
  },
  {
      "id": "c-2",
      "label": "Mark as Complete",
      "checked": false,
      "videoUrl": "https://drive.google.com/file/d/1BBnYqSQaQSZBieMsOjWFNM8ADgU7hofN/preview",
      "thumbnail": "assest/t_n.png"  // Add thumbnail for the second video
  },
]

renderContent(data)

function renderContent(content) {
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

    // Create video element
    const video = document.createElement('iframe')
    video.width = 310
    video.height = 200
    video.src = item.videoUrl
    video.controls = true  // Add controls for play, pause, etc.
    video.setAttribute('preload', 'metadata')  // Preload only metadata for faster loading
    video.setAttribute('loading', 'lazy')  // Lazy loading for better performance

    // Add poster attribute for the video thumbnail
    video.setAttribute('poster', item.thumbnail)

    // Append video and div to the list item
    li.appendChild(div)
    li.appendChild(video)

    // Append list item to the content list
    contentList.appendChild(li)
  })
}


document.addEventListener('DOMContentLoaded', renderContent)

document.getElementById('ass').addEventListener('click', e => {
  const Name = encodeURIComponent(name)
  window.location.href = `assignment.html?name=${Name}`
})

if (result === 'Pass') {
  // Check if result is a string and equals 'pass'
  const cerButton = document.getElementById('cer')
  cerButton.style.cursor = 'pointer'

  cerButton.addEventListener('click', e => {
    const Name = encodeURIComponent(name) // Properly encode the name
    window.location.href = `certificate.html?name=${Name}` // Use the encoded name
  })
} else {
  const cerButton = document.getElementById('cer')
  cerButton.style.cursor = 'not-allowed' // Set the cursor to 'not-allowed' when the result is not pass
}

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
  
