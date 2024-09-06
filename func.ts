// Function to handle form data and localStorage operations
function handleForm(action: 'save' | 'load') {
    const fields = ['name', 'age', 'address', 'degree', 'institution', 'graduation-year', 'education-info', 
                    'skill-1', 'skill-2', 'skill-3', 'skills-info', 'job-title', 'company', 'years-worked', 
                    'experience-info', 'project-name', 'project-description', 'projects-info', 'email', 'phone'];
    
    if (action === 'save') {
      console.log("Save function triggered");  // Debugging log
      const userData = fields.reduce((data, field) => {
        data[field] = (document.getElementById(field) as HTMLInputElement | HTMLTextAreaElement).value;
        return data;
      }, {} as any);
      
      localStorage.setItem('resumeData', JSON.stringify(userData));
      alert('Data saved to local storage!');
    } else if (action === 'load') {
      const savedData = JSON.parse(localStorage.getItem('resumeData') || '{}');
      fields.forEach(field => {
        if (savedData[field]) {
          (document.getElementById(field) as HTMLInputElement | HTMLTextAreaElement).value = savedData[field];
        }
      });
    }
  }
  
  // Save button click handler
  document.getElementById('save-btn')?.addEventListener('click', () => {
    console.log("Save button clicked");  // Debugging log
    handleForm('save');
  });
  
  // Load saved data when page loads
  window.onload = () => handleForm('load');
  
  // Section toggle functionality
  document.querySelectorAll('nav button').forEach((button, index) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.section').forEach((section, sectionIndex) => {
        (section as HTMLElement).style.display = index === sectionIndex ? 'block' : 'none';
      });
    });
  });
  