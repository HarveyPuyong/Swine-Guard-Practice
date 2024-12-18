function sideNav(){
  const sideNavs = document.querySelectorAll('.services-nav li');
  const sections = document.querySelectorAll('section');

  sideNavs.forEach(nav =>{
    nav.addEventListener('click', ()=> {
      sections.forEach(section => {
        const navValue = nav.getAttribute('data-value');
        const sectionId = section.getAttribute('id')
        
        if(navValue === sectionId){
          section.style.display = 'block'
        }else{
          section.style.display = 'none';
        }
      })
    })

  } );
}

export default sideNav;