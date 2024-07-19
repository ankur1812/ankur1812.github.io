// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('section');
//     const tabs = document.querySelectorAll('.tab-link');

//     // Intersection Observer to detect which section is active
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const id = entry.target.getAttribute('id');
//                 tabs.forEach(tab => {
//                     tab.classList.remove('active');
//                     if (tab.getAttribute('href') === `#${id}`) {
//                         tab.classList.add('active');
//                     }
//                 });
//             }
//         });
//     }, { threshold: 0.6 });

//     sections.forEach(section => {
//         observer.observe(section);
//     });

//     // Click event to handle tab change and scroll to section
//     tabs.forEach(tab => {
//         tab.addEventListener('click', (event) => {
//             event.preventDefault();
//             const targetId = tab.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);

//             // Scroll to the target section with smooth animation
//             targetSection.scrollIntoView({ behavior: 'smooth' });

//             // Update active tab
//             tabs.forEach(t => t.classList.remove('active'));
//             tab.classList.add('active');
//         });
//     });
// });
