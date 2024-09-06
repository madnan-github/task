// app.ts

function handleForm(action: 'save' | 'load') {
    const fields = ['name', 'age', 'address', 'degree', 'institution', 'graduation-year', 'education-info', 
                    'skill-1', 'skill-2', 'skill-3', 'skills-info', 'job-title', 'company', 'years-worked', 
                    'experience-info', 'project-name', 'project-description', 'projects-info', 'email', 'phone'];
    
    if (action === 'save') {
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
  
  document.getElementById('save-btn')?.addEventListener('click', () => handleForm('save'));
  
  window.onload = () => handleForm('load');
  
  document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.id.split('-')[0];
      document.querySelectorAll('.section').forEach(section => {
        (section as HTMLElement).style.display = section.id === targetId ? 'block' : 'none';
      });
    });
  });
  