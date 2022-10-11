const menuButton = document.getElementById('destop-menu');
const mainElement = document.getElementById('section1');
const workSection = document.getElementById('portfolio');
const navId = document.getElementById('navId');
const menuIcon = document.getElementById('hm-menuIcon');
const logoText = document.getElementById('logo-text');
const mobileNavigation = document.querySelectorAll('.clicked-item');

const modalClass = document.getElementById('modalClass');
const modalClassRemove = document.querySelector('.close-button');

//  name, description, featured image, technologies, link to live version, link to source.
let work1 = {
  name: 'Tonic',
  description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: 'image/works/SnapshootPortfolio.svg',
  technologies: ['html', 'css', 'javascript'],
  linkToLiveVersion: 'liveversion.com',
  linkToSource: 'github.com/bhskr44',
};

let work2 = {
  name: 'Multi-Post Stories',
  description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: 'image/works/SnapshootPortfolio2.svg',
  technologies: ['html', 'css', 'javascript'],
  linkToLiveVersion: 'liveversion.com',
  linkToSource: 'github.com/bhskr44',
};

let work3 = {
  name: 'Tonic',
  description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: 'image/works/SnapshootPortfolio3.svg',
  technologies: ['html', 'css', 'javascript'],
  linkToLiveVersion: 'liveversion.com',
  linkToSource: 'github.com/bhskr44',
};
let work4 = {
  name: 'Multi-Post Stories',
  description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredImage: 'image/works/SnapshootPortfolio4.svg',
  technologies: ['html', 'css', 'javascript'],
  linkToLiveVersion: 'liveversion.com',
  linkToSource: 'github.com/bhskr44',
};

var myWorksArray = [work1, work2, work3, work4];
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < myWorksArray.length; i++) {
    let createMainDiv = document.createElement('div');
    createMainDiv.className += 'my-work';
    workSection.appendChild(createMainDiv);

    let portfolioImage = document.createElement('img');
    portfolioImage.src = myWorksArray[i].featuredImage;
    createMainDiv.appendChild(portfolioImage);

    let myWorkBody = document.createElement('div');
    myWorkBody.className += 'my-work-body';
    createMainDiv.appendChild(myWorkBody);

    let workTitle = document.createElement('h2');
    workTitle.innerHTML = myWorksArray[i].name;
    myWorkBody.appendChild(workTitle);

    let positionContainer = document.createElement('div');
    positionContainer.className += 'position-container';
    myWorkBody.appendChild(positionContainer);

    let canopy = document.createElement('span');
    canopy.innerHTML = 'Canopy';
    positionContainer.appendChild(canopy);

    let pcUL = document.createElement('ul');
    positionContainer.appendChild(pcUL);

    let developedMarked = document.createElement('li');
    developedMarked.className += 'developed marked';
    developedMarked.innerHTML = 'Backend development';
    pcUL.appendChild(developedMarked);

    let yearMarked = document.createElement('li');
    yearMarked.className += 'year marked';
    yearMarked.innerHTML = '2018';
    pcUL.appendChild(yearMarked);

    let descrpt = document.createElement('p');
    descrpt.innerHTML = myWorksArray[i].description;
    myWorkBody.appendChild(descrpt);

    let techUL = document.createElement('ul');
    techUL.className += 'tech';
    myWorkBody.appendChild(techUL);

    for (let j = 0; j < myWorksArray[i].technologies.length; j++) {
      let techLI = document.createElement('li');
      techLI.innerHTML = myWorksArray[i].technologies[j];
      techUL.appendChild(techLI);
    }

    let seeProject = document.createElement('a');
    seeProject.innerHTML = 'See Project';
    myWorkBody.appendChild(seeProject);

    seeProject.addEventListener('click', () => {
      let card = document.createElement('div');
      card.className += 'card';
      modalClass.appendChild(card);

      let cardHeader = document.createElement('div');
      cardHeader.className += 'card-header';
      card.appendChild(cardHeader);

      let cardHead = document.createElement('div');
      cardHead.className += 'card-head';
      cardHeader.appendChild(cardHead);

      let cardTitle = document.createElement('h4');
      cardTitle.innerHTML = myWorksArray[i].name;
      cardHead.appendChild(cardTitle);

      let cardImage = document.createElement('img');
      cardImage.className += 'close-button';
      cardImage.src = 'image/cloasepopup.svg';
      cardImage.alt = 'Close Button';
      cardHead.appendChild(cardImage);

      cardImage.addEventListener('click', () => {
        modalClass.classList.add('hide');
      });

      // modalClassRemove.addEventListener('click', () => {
      //   modalClass.classList.add('hide');
      // });

      let miniContainer = document.createElement('div');
      miniContainer.className += 'mini-ps-container';
      cardHeader.appendChild(miniContainer);

      let mContainer = document.createElement('span');
      mContainer.innerHTML = 'Canopy';
      miniContainer.appendChild(mContainer);

      let mcUL = document.createElement('ul');
      miniContainer.appendChild(mcUL);

      let mcUli = document.createElement('li');
      mcUli.innerHTML = 'Backend Development';
      mcUL.appendChild(mcUli);

      let mcUliYear = document.createElement('li');
      mcUliYear.innerHTML = '2018';
      mcUL.appendChild(mcUliYear);

      let cardBody = document.createElement('div');
      cardBody.className += 'card-body';
      card.appendChild(cardBody);

      let bodyImage = document.createElement('img');
      bodyImage.src = myWorksArray[i].featuredImage;
      cardBody.appendChild(bodyImage);

      let bodydecr = document.createElement('p');
      bodydecr.innerHTML = myWorksArray[i].description;
      cardBody.appendChild(bodydecr);

      let cardTags = document.createElement('ul');
      cardTags.className += 'card-tags';
      cardBody.appendChild(cardTags);

      for (let j = 0; j < myWorksArray[i].technologies.length; j++) {
        let tagLI = document.createElement('li');
        tagLI.innerHTML = myWorksArray[i].technologies[j];
        cardTags.appendChild(tagLI);
      }

      let displayCentered = document.createElement('div');
      displayCentered.className += 'display-centered';
      cardBody.appendChild(displayCentered);

      let seeLive = document.createElement('a');
      seeLive.innerHTML = 'See Live';
      seeLive.className += 'btn-secondary';
      seeLive.href = myWorksArray[i].linkToLiveVersion;
      displayCentered.appendChild(seeLive);

      let seeLiveImage = document.createElement('img');
      seeLiveImage.src = 'image/icons/live.svg';
      seeLiveImage.alt = 'See PRoject Live';
      seeLive.appendChild(seeLiveImage);

      let seeSource = document.createElement('a');
      seeSource.innerHTML = 'See Live';
      seeSource.className += 'btn-secondary';
      seeSource.href = myWorksArray[i].linkToSource;
      displayCentered.appendChild(seeSource);

      let seeSourceImage = document.createElement('img');
      seeSourceImage.src = 'image/icons/github.svg';
      seeSourceImage.alt = 'See Source Code';
      seeSource.appendChild(seeSourceImage);

      modalClass.classList.remove('hide');
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
