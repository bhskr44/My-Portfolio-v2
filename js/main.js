const menuButton = document.getElementById('destop-menu');
const mainElement = document.getElementById('section1');
const workSection = document.getElementById('portfolio');
const navId = document.getElementById('navId');
const menuIcon = document.getElementById('hm-menuIcon');
const logoText = document.getElementById('logo-text');
const mobileNavigation = document.querySelectorAll('.clicked-item');

const modalClass = document.getElementById('modalClass');
const mainNode = document.getElementById('main');

const form = document.getElementById('form');
const emailElement = document.getElementById('email');
const nameElement = document.getElementById('name');
const messageElement = document.getElementById('message');
const messageBox = document.getElementById('error-message');

const myWorksArray = [
  {
    projectId: 1,
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'image/works/SnapshootPortfolio.svg',
    technologies: ['html', 'css', 'javascript', 'bootstrap'],
    linkToLiveVersion: 'liveversion.com',
    linkToSource: 'github.com/bhskr44',
  },
  {
    projectId: 2,
    name: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'image/works/SnapshootPortfolio2.svg',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'liveversion.com',
    linkToSource: 'github.com/bhskr44',
  },
  {
    projectId: 3,
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'image/works/SnapshootPortfolio3.svg',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'liveversion.com',
    linkToSource: 'github.com/bhskr44',
  },
  {
    projectId: 4,
    name: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'image/works/SnapshootPortfolio4.svg',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'liveversion.com',
    linkToSource: 'github.com/bhskr44',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < myWorksArray.length; i += 1) {
    const createMainDiv = document.createElement('div');
    createMainDiv.className += 'my-work';
    workSection.appendChild(createMainDiv);

    const portfolioImage = document.createElement('img');
    portfolioImage.src = myWorksArray[i].featuredImage;
    createMainDiv.appendChild(portfolioImage);

    const myWorkBody = document.createElement('div');
    myWorkBody.className += 'my-work-body';
    createMainDiv.appendChild(myWorkBody);

    const workTitle = document.createElement('h2');
    workTitle.innerHTML = myWorksArray[i].name;
    myWorkBody.appendChild(workTitle);

    const positionContainer = document.createElement('div');
    positionContainer.className += 'position-container';
    myWorkBody.appendChild(positionContainer);

    const canopy = document.createElement('span');
    canopy.innerHTML = 'Canopy';
    positionContainer.appendChild(canopy);

    const pcUL = document.createElement('ul');
    positionContainer.appendChild(pcUL);

    const developedMarked = document.createElement('li');
    developedMarked.className += 'developed marked';
    developedMarked.innerHTML = 'Backend development';
    pcUL.appendChild(developedMarked);

    const yearMarked = document.createElement('li');
    yearMarked.className += 'year marked';
    yearMarked.innerHTML = '2018';
    pcUL.appendChild(yearMarked);

    const descrpt = document.createElement('p');
    descrpt.innerHTML = myWorksArray[i].description;
    myWorkBody.appendChild(descrpt);

    const techUL = document.createElement('ul');
    techUL.className += 'tech';
    myWorkBody.appendChild(techUL);

    for (let j = 0; j < myWorksArray[i].technologies.length; j += 1) {
      const techLI = document.createElement('li');
      techLI.innerHTML = myWorksArray[i].technologies[j];
      techUL.appendChild(techLI);
    }

    const seeProject = document.createElement('a');
    seeProject.innerHTML = 'See Project';
    myWorkBody.appendChild(seeProject);

    seeProject.addEventListener('click', () => {
      const card = document.createElement('div');
      card.className += 'card';
      modalClass.appendChild(card);

      const cardHeader = document.createElement('div');
      cardHeader.className += 'card-header';
      card.appendChild(cardHeader);

      const cardHead = document.createElement('div');
      cardHead.className += 'card-head';
      cardHeader.appendChild(cardHead);

      const cardTitle = document.createElement('h4');
      cardTitle.innerHTML = myWorksArray[i].name;
      cardHead.appendChild(cardTitle);

      const cardImage = document.createElement('img');
      cardImage.className += 'close-button';
      cardImage.src = 'image/cloasepopup.svg';
      cardImage.alt = 'Close Button';
      cardHead.appendChild(cardImage);

      cardImage.addEventListener('click', () => {
        modalClass.classList.add('hide');
        mainNode.classList.remove('add-blur');
      });

      const miniContainer = document.createElement('div');
      miniContainer.className += 'mini-ps-container';
      cardHeader.appendChild(miniContainer);

      const mContainer = document.createElement('span');
      mContainer.innerHTML = 'Canopy';
      miniContainer.appendChild(mContainer);

      const mcUL = document.createElement('ul');
      miniContainer.appendChild(mcUL);

      const mcUli = document.createElement('li');
      mcUli.innerHTML = 'Backend Development';
      mcUL.appendChild(mcUli);

      const mcUliYear = document.createElement('li');
      mcUliYear.innerHTML = '2018';
      mcUL.appendChild(mcUliYear);

      const cardBody = document.createElement('div');
      cardBody.className += 'card-body';
      card.appendChild(cardBody);

      const bodyImage = document.createElement('img');
      bodyImage.src = myWorksArray[i].featuredImage;
      cardBody.appendChild(bodyImage);

      const cardBodyChilds = document.createElement('div');
      cardBodyChilds.className += 'childs';
      cardBody.appendChild(cardBodyChilds);

      const bodydecr = document.createElement('p');
      bodydecr.innerHTML = myWorksArray[i].description;
      cardBodyChilds.appendChild(bodydecr);

      const cardBodyChildsAsscories = document.createElement('div');
      cardBodyChildsAsscories.className += 'asscories';
      cardBodyChilds.appendChild(cardBodyChildsAsscories);

      const cardTags = document.createElement('ul');
      cardTags.className += 'card-tags';
      cardBodyChildsAsscories.appendChild(cardTags);

      for (let j = 0; j < myWorksArray[i].technologies.length; j += 1) {
        const tagLI = document.createElement('li');
        tagLI.innerHTML = myWorksArray[i].technologies[j];
        cardTags.appendChild(tagLI);
      }

      const displayCentered = document.createElement('div');
      displayCentered.className += 'display-centered';
      cardBodyChildsAsscories.appendChild(displayCentered);

      const seeLive = document.createElement('a');
      seeLive.innerHTML = 'See Live';
      seeLive.className += 'btn-secondary';
      seeLive.href = myWorksArray[i].linkToLiveVersion;
      displayCentered.appendChild(seeLive);

      const seeLiveImage = document.createElement('img');
      seeLiveImage.src = 'image/icons/live.svg';
      seeLiveImage.alt = 'See PRoject Live';
      seeLive.appendChild(seeLiveImage);

      const seeSource = document.createElement('a');
      seeSource.innerHTML = 'See Source';
      seeSource.className += 'btn-secondary';
      seeSource.href = myWorksArray[i].linkToSource;
      displayCentered.appendChild(seeSource);

      const seeSourceImage = document.createElement('img');
      seeSourceImage.src = 'image/icons/github.svg';
      seeSourceImage.alt = 'See Source Code';
      seeSource.appendChild(seeSourceImage);

      modalClass.classList.remove('hide');
      mainNode.classList.add('add-blur');
    });
  }


});

mobileNavigation.forEach((item) => {
  item.addEventListener('click', () => {
    menuButton.style.display = 'none';
    navId.classList.remove('add-bg-to-nav');
    mainElement.classList.remove('add-blur');
    logoText.classList.remove('add-blur');
    menuIcon.src = 'image/close.svg';
  });
});

menuIcon.addEventListener('click', () => {
  if (menuButton.style.display === 'block') {
    menuButton.style.display = 'none';
    navId.classList.remove('add-bg-to-nav');
    menuIcon.src = 'image/hamburger.svg';
    mainElement.classList.remove('add-blur');
    logoText.classList.remove('add-blur');
  } else {
    menuButton.style.display = 'block';
    menuIcon.src = 'image/close.svg';
    navId.classList.add('add-bg-to-nav');
    mainElement.classList.add('add-blur');
    logoText.classList.add('add-blur');
  }
});

//Set Data To local Storage
function saveTolocalStorage() {
  let myFormSubmit = {
    name: nameElement.value,
    email: emailElement.value,
    message: messageElement.value,
  };
  localStorage.setItem('myFormSubmit', JSON.stringify(myFormSubmit));
}

function compareandalert() {
  if (email.value === email.value.toLowerCase()) {
    saveTolocalStorage();
    form.submit();
    form.reset();
  } else {
    messageBox.innerHTML = 'Your email should be in lowercase*';
  }
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  compareandalert();
});
