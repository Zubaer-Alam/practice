const showDate = () => {
  setInterval(() => {
    document.getElementById('time').innerHTML = Date();
  }, 1000);
};

const showPage = (pageId) => {
  const pages = [ 'Homepage', 'About', 'contactInfo' ];
  pages.forEach((page) => {
    const display = page === pageId ? 'block' : 'none';
    document.getElementById(page).style.display = display;
  });
};

const showHomePage = () => {
  showPage('Homepage');
};

const showAboutPage = () => {
  showPage('About');
};

const showContactInfo = () => {
  showPage('contactInfo');
};
